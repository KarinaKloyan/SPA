import { NavLink } from "react-router-dom";
import { posts } from "../../index.js";
import "./Posts.css";

function Posts() {
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
