import React from "react";
import { Routes, Route, Form } from "react-router-dom";
import {Albums, Comments, Home, Layout, Photos, Post, Posts, Todos, User, Users, Comment, Not} from './components'
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
