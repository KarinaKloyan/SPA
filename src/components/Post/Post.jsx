import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Post.css";

function Post() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [postItem, setPostItem] = useState(null);

    useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPostItem(data))
      .catch((error) => console.log(error));
  }, [id]);

  const handleRedirectBack = () => {
    navigate(-1);
  };

  // const postItem = posts.find((el) => el.id === +id);

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
