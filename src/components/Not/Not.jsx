import { useNavigate } from "react-router-dom";
import './Not.css'

function Not() {
  const navigate = useNavigate;
  return (
    <div className="error-page">
      <h1>404</h1>
      <p>Page not found</p>
      <button className="go-back-btn" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
}


export default Not
