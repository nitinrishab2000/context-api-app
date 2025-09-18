import React from "react";
import Post from "./Post";
import { useContext } from "react";
import UserInfoContext from "../context/UserInfoContext";

const BlogPage = () => {
  const userInfo = useContext(UserInfoContext);
  return (
    <div>
      <h1>Blog</h1>
      <Post username={userInfo.username} isAdmin={userInfo.isAdmin}></Post>
    </div>
  );
};
export default BlogPage;
