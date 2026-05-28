import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Comments.css";

function Comments() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  return loading ? (
    <div className="loader-container">
      <span className="loader"></span>
    </div>
  ) : (
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
