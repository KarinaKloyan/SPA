import { useParams, useNavigate } from "react-router-dom";
import { posts } from "../../index.js";
import "./Post.css";

function Post() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleRedirectBack = () => {
    navigate(-1);
  };

  const postItem = posts.find((el) => el.id === +id);
  
  return postItem ? (
    <div className="card">
      <h2 className="card-title">{postItem.title}</h2>
      <p>{postItem.body}</p>
      <button className="go-back-btn" onClick={handleRedirectBack}>
        Go Back
      </button>
    </div>
  ) : (
    <button className="go-back-btn" onClick={handleRedirectBack}>
      Go Back
    </button>
  );
}

export default Post;
