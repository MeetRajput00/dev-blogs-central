import { useState } from "react";
import {  Link } from "react-router-dom";
import { authenticateUser } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
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
      if(authenticated){
        navigate("/userfeed");
      }
      else{
        alert("User or password is incorrect.")
      }
    })
  };
  return (
    <div className="flex items-center justify-center flex-col min-h-screen min-w-fit bg-white">
      <div className="flex flex-col h-fit w-1/4 bg-white items-center rounded-md shadow-md">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
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
          <div className="flex flex-row items-center mt-6 justify-end">
          <p className="text-center text-sm text-gray-500">
            Not a member?
          </p>
          <div className="font-semibold leading-6 text-orange-600 hover:text-orange-500">
            <Link to="/register">Register now</Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
