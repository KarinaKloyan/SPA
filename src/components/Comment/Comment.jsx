import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Comment.css";

function Comment() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [commentItem, setCommentItem] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
      .then((response) => response.json())
      .then((data) => setCommentItem(data))
      .catch((error) => console.log(error));
  }, [id]);

  const handleRedirectBack = () => {
    navigate(-1);
  };
  // const commentItem = comments.find((el) => el.id === +id);
  return commentItem ? (
    <div className="card">
      <p className="card-email">{commentItem.email}</p>
      <p className="card-body">{commentItem.body}</p>
      <button className="go-back-btn" onClick={handleRedirectBack}>
        Go Back
      </button>
    </div>
  ) : (
    <>
      <div className="loader-container">
        <span className="loader"></span>
      </div>
      <button className="go-back-btn" onClick={handleRedirectBack}>
        Go Back
      </button>
    </>
  );
}

export default Comment;
