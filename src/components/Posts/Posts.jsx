import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Posts.css";

function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="posts">
      {posts.map((el) => {
        return (
          <NavLink key={el.id} to={`/posts/${el.id}`}>
            <div className="card">
              <h2 className="card-title">{el.title}</h2>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
}

export default Posts;
