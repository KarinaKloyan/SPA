import './Albums.css'
import { albums } from '../..';

function Albums(){
    return (
        <div className="albums">
          {albums.map((el) => {
            return (
              <div className="card" key={el.id}>
                <h2 className="card-title">{el.title}</h2> 
              </div>
            );
          })}
        </div>
      );
}

export default Albums