import { useState } from "react";
import {  Link } from "react-router-dom";
import { authenticateUser } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { setFirstName,setLastName,setEmail,setJoiningDate,setMobile,setUsername,setUserAuthenticated } from "../features/currentUser/currentUserSlice";
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import writeUserData, { checkUserExists } from "../firebase/firebase";

export default function LoginComponent() {
  const dispatch = useDispatch()
  const navigate=useNavigate();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const changeHandler = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const onButtonClick = () => {
    authenticateUser(credentials.username,credentials.password).then((authenticated)=>{
      if(authenticated!=null){
        dispatch(setFirstName(authenticated.firstName));
        dispatch(setLastName(authenticated.lastName));
        dispatch(setEmail(authenticated.email));
        dispatch(setMobile(authenticated.mobile));
        dispatch(setJoiningDate(authenticated.joiningDate));
        dispatch(setUsername(authenticated.username));
        dispatch(setUserAuthenticated());
        navigate("/userfeed");
      }
      else{
        alert("User or password is incorrect.")
      }
    })
  };
  const loginByGoogle=(token)=>{
    checkUserExists(token.name).then((userExists)=>{
        if(!userExists){            
          writeUserData(
            token.given_name,
            token.family_name,
            "",
            token.name,
            token.email,
            ""
          );
        }
      });
    dispatch(setFirstName(token.given_name));
    dispatch(setLastName(token.family_name));
    dispatch(setEmail(token.email));
    dispatch(setMobile(token.mobile));
    dispatch(setJoiningDate(new Date().toLocaleString()));
    dispatch(setUsername(token.name));
    dispatch(setUserAuthenticated());
    navigate("/userfeed");
  }
  return (
    <div className="flex items-center justify-center flex-col w-1/4 bg-white">
      <div className="flex flex-col h-fit w-full bg-white items-center rounded-md shadow-md">
        <div>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="text"
                  name="username"
                  value={credentials.username}
                  onChange={changeHandler}
                  required
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm font-semibold text-orange-600 hover:text-orange-500">
                  <Link to="/register">Forgot password?</Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={credentials.password}
                  onChange={changeHandler}
                  required
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={onButtonClick}
                className="flex w-full justify-center rounded-md bg-orange-600 hover:bg-orange-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                Sign in
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center mt-6 justify-end">
            <div className="flex flex-row items-center justify-end">
              
          <p className="text-center text-sm text-gray-500">
            Not a member?
          </p>
          <div className="font-semibold leading-6 text-orange-600 hover:text-orange-500">
            <Link to="/register">Register now</Link>
          </div>
            </div>
          
          <div className="flex items-center w-full my-4">
            <hr className="w-full" />
            <p className="px-3 ">OR</p>
            <hr className="w-full" />
          </div>
          <div className="my-3 space-y-2 flex justify-center w-full">
            <GoogleLogin
              aria-label="Login with Google"
              width="350"
              onSuccess={credentialResponse=>{
                loginByGoogle(jwt_decode(credentialResponse.credential));
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            >
            </GoogleLogin>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
