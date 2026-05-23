import { comments } from '../..';
import './Comments.css'

function Comments(){
  return (
    <div className="comments">
      {comments.map((el) => {
        return (
          <div className="card" key={el.id}>
            <h2 className="card-name">{el.name}</h2>
            <p className="card-email">{el.email}</p>
            <p className="card-body">{el.body}</p>
            
          </div>
        );
      })}
    </div>
  );
}

export default Comments