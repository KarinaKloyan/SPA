import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Users.css'

function Users(){
  const [users, setUsers] = useState([])

  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error))
  }, [])
      return (
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

export default Users