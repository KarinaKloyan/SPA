import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Users.css";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return loading ? (
    <div className="loader-container">
      <span className="loader"></span>
    </div>
  ) : (
    <div className="users">
      {users.map((el) => {
        return (
          <NavLink key={el.id} to={`/users/${el.id}`}>
            <div className="card">
              <h2 className="card-name">{el.name}</h2>
              <p className="card-userName">{el.username}</p>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
}

export default Users;
