import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";
import Albums from "./components/Albums/Albums";
import Photos from "./components/Photos/Photos";
import Todos from "./components/Todos/Todos";
import Users from "./components/Users/Users";
import Layout from "./components/Layout/Layout";
import Post from "./components/Post/Post";
import User from "./components/User/User";
import Comment from "./components/Comment/Comment";
import Not from "./components/Not/Not";
import "./App.css";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/comments/:id" element={<Comment />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<User />} />
          <Route path="*" element={<Not/>}/>
        </Route>
      </Routes>
  );
}

export default App;
