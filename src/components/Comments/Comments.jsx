import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Comments.css";

function Comments() {
   const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="comments">
      {comments.map((el) => {
        return (
          <NavLink key={el.id} to={`/comments/${el.id}`}>
            <div className="card">
              <h2 className="card-name">{el.name}</h2>
              <p className="card-email">{el.email}</p>
              <p className="card-body">{el.body}</p>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
}

export default Comments;
