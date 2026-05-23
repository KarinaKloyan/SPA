import { users } from '../../index.js'
import './Users.css'

function Users(){
      return (
        <div className="users">
          {users.map((el) => {
            return (
              <div className="card" key={el.id}>
                <h2 className="card-name">{el.name}</h2>
                <p className="card-userName">{el.username}</p>
                <p className="card-email">{el.email}</p>
                <p className="card-address">{el.address.street} {el.address.city} {el.address.zipcode}</p>
                <p className="card-phone">{el.phone}</p>
                <p className="card-website">{el.website}</p>
                <p className="card-company">{el.company.name} {el.company.catchPhrase} {el.company.bs}</p>
              </div>
            );
          })}
        </div>
      );
}

export default Users