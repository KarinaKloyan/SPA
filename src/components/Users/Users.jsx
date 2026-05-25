import { NavLink } from 'react-router-dom';
import { users } from '../../index.js'
import './Users.css'

function Users(){
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