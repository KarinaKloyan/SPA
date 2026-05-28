import './Albums.css'
import { useState, useEffect } from 'react';

function Albums(){
   const [albums, setAlbums] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((data) => setAlbums(data))
      .catch((error) => console.log(error));
  }, []);
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