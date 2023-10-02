import React from "react";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
import MyBlogs from "./userPages/MyBlogs";
import Profile from "./userPages/Profile";
import CreateNewBlog from "./userPages/CreateNewBlog"; 
import Categories from "./userPages/Categories";
import Drafts from "./userPages/Drafts";
import Bookmarks from "./userPages/Bookmarks"; 
import Settings from "./userPages/Settings";
import Dashboard from "./userPages/Dashboard";

export default function Userfeed() {
  const isAuthenticated=useSelector((state)=>state.currentUser.isAuthenticated);
  const Title = useSelector((state) => state.currentPage.Title);
  return (
    <div className="flex flex-row w-full h-screen">
      {isAuthenticated ? (
        <>
          <Sidebar />
          {Title === "Dashboard" && <Dashboard />}
          {Title === "Profile" && <Profile />}
          {Title === "My Blogs" && <MyBlogs />}
          {Title === "Create New Blog" && <CreateNewBlog />}
          {Title === "Categories/Tags" && <Categories />}
          {Title === "Drafts" && <Drafts />}
          {Title === "Bookmarks" && <Bookmarks />}
          {Title === "Settings" && <Settings />}
        </>
      ) : (
        <div className="text-red-500">Please log in to access this content.</div>
      )}
    </div>
  );
}
