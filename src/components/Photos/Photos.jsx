import { useState, useEffect } from "react";
import "./Photos.css";

function Photos() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setPhotos(data))
      .catch((error) => console.log(error));
  }, []);
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

export default Photos;
