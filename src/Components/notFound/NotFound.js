import "./notFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>404</h2>
      <p>Page not found</p>
      <br />
      <Link to="/home">
        <button>Go Back to Homepage</button>
      </Link>
    </div>
  );
};

export default NotFound;
