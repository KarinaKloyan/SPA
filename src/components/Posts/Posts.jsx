import { posts } from "../../index.js";
import './Posts.css'


function Posts() {
  return (
    <div className="posts">
      {posts.map((el) => {
        return (
          <div className="card" key={el.id}>
            <h2 className="card-title">{el.title}</h2>
            <p className="card-text">{el.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Posts