import React from "react";
import { Link } from "react-router-dom";
import HoverButton from "./HoverButton";
import { useSelector } from "react-redux";

function Sidebar() {
  const FirstName=useSelector((state)=>state.currentUser.firstName);
  const LastName=useSelector((state)=>state.currentUser.lastName);
  const JoiningDate=useSelector((state)=>state.currentUser.joiningDate);

  const topBarTitles = [
    "Dashboard",
    "Create New Blog",
    "My Blogs",
    "Categories/Tags",
    "Drafts",
    "Bookmarks",
    "Profile",
  ];

  const bottomBarTitles = ["Settings", "Logout"];

  return (
    <div className="flex flex-col h-screen w-2/12 shadow-md items-center">
      <div className="w-full h-full items-start flex flex-col justify-evenly ml-6">
        <Link to="/userfeed" className="flex items-center p-4 mt-6 mb-6">
          <div className="flex items-center space-x-4">
          <svg className="w-10 h-10 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path></svg>
            <div className="font-medium dark:text-white">
              <div>{FirstName} {LastName}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Joined on {JoiningDate.match(/(\d{1,4}([.\-/])\d{1,2}([.\-/])\d{1,4})/g)}
              </div>
            </div>
          </div>
        </Link>
        {topBarTitles.map((title, index) => (
          <div className="p-4" key={index}>
            <HoverButton name={title} className="w-32"/>
          </div>
        ))}

        <div className="mt-auto">
          {bottomBarTitles.map((title, index) => (
            <div className="p-4" key={index} >
              <HoverButton name={title} className="w-32" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
