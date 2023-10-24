import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import writeUserData, { checkUserExists } from "../firebase/firebase";
import { authenticateUser } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { setFirstName,setLastName,setEmail,setJoiningDate,setMobile,setUsername,setUserAuthenticated } from "../features/currentUser/currentUserSlice";

export default function Register() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    firstName:"",
    lastName:"",
    mobile:"",
    username: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const userLoggedIn=()=>{    
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
    });
  }
  const addUser = () => {
    try {
      checkUserExists(credentials.username).then((userExists)=>{
        if(userExists){
          alert("Username already exists!");
        }
        else{
          writeUserData(
            credentials.firstName,
            credentials.lastName,
            credentials.mobile,
            credentials.username,
            credentials.email,
            credentials.password
          );
          userLoggedIn();
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-white">
        <div className="w-1/4 px-6 py-4 mt-6 overflow-hidden bg-white shadow-md">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register to Get Started
          </h2>
        </div>
          <div>
          <div className="mt-4 flex flex-row">
            <div className="w-1/2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                First Name
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="firstName"
                  onChange={changeHandler}
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="ml-4 w-1/2">
            <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Last Name
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="lastName"
                  onChange={changeHandler}
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
            <div className="mt-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Mobile
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="number"
                  name="mobile"
                  onChange={changeHandler}
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Username
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="username"
                  onChange={changeHandler}
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Email
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="email"
                  name="email"
                  onChange={changeHandler}
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password"
                  onChange={changeHandler}
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password_confirmation"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Confirm Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password_confirmation"
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="flex items-center mt-4">
              <button
                onClick={addUser}
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-orange-600 rounded-md hover:bg-orange-700 focus:outline-none focus:bg-orange-700"
              >
                Register
              </button>
            </div>
          </div>
          <div className="mt-4 text-grey-600">
            Already have an account?{" "}
            <span>
              <Link className="text-orange-600 hover:text-orange-500 hover:underline" to="/login">
                Log in
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
