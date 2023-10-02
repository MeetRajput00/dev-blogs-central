import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-full flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center">
            <span className="self-center text-3xl font-extrabold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-300">
            DevBlog Central
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-multi-level"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-multi-level"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto " id="navbar-multi-level">
            <ul className="flex flex-row font-medium ">
              <li>
                <Link
                  to="/login"
                  className="block py-2 pl-3 pr-6 text-black  font-medium text-lg"
                >
                  Login
                </Link>
              </li>
              <li>
                
                <Link
                  to="/register"
                  className="flex flex-row items-center py-2 pl-3 pr-4 text-white bg-orange-600 hover:bg-orange-700 font-medium rounded-lg text-lg  dark:bg-orange-600 dark:hover:bg-orange-700 "
                >
                  <span>Sign up</span>
                  <svg className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414" fill="#000" fillRule="nonzero" />

                  </svg>  
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}
