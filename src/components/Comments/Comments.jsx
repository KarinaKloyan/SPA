import { NavLink } from "react-router-dom";
import { comments } from "../../index.js";
import "./Comments.css";

function Comments() {
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
