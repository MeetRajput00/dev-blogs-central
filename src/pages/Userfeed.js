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

export default function Userfeed() {
  const Title = useSelector((state) => state.currentPage.Title);

  return (
    <div className="flex flex-row w-full h-screen">
      <Sidebar />
      {Title === "Profile" && <Profile />}
      {Title === "My Blogs" && <MyBlogs />}
      {Title === "Create New Blog" && <CreateNewBlog />}
      {Title === "Categories/Tags" && <Categories />}
      {Title === "Drafts" && <Drafts />}
      {Title === "Bookmarks" && <Bookmarks />}
      {Title === "Settings" && <Settings />}
    </div>
  );
}
