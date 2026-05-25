import { useNavigate, useParams } from "react-router-dom";
import { users } from "../../index.js";
import "../Users/Users.css";

function User() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleRedirectBack = () => {
    navigate(-1);
  };

  const userItem = users.find((el) => el.id === +id);

  return userItem ? (
    <div className="card">
      <p className="card-email">{userItem.email}</p>
      <p className="card-address">
        {userItem.address.street} {userItem.address.city}{" "}
        {userItem.address.zipcode}
      </p>
      <p className="card-phone">{userItem.phone}</p>
      <p className="card-website">{userItem.website}</p>
      <p className="card-company">
        {userItem.company.name} {userItem.company.catchPhrase}{" "}
        {userItem.company.bs}
      </p>
      <button className="go-back-btn" onClick={handleRedirectBack}>
        Go Back
      </button>
    </div>
  ) : (
    <button className="go-back-btn" onClick={handleRedirectBack}>
      Go Back
    </button>
  );
}

export default User;
