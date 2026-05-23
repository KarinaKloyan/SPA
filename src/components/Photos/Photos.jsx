import { photos } from '../../index.js'
import './Photos.css'

function Photos(){
    return (
        <div className="photos">
          {photos.map((el) => {
            return (
              <div className="card" key={el.id}>
                <h2 className="card-title">{el.title}</h2>
                <img src={el.url} alt="image" />
              </div>
            );
          })}
        </div>
      );
}

export default Photos