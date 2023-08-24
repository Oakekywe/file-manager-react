import "./Navbar.css"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {signOutUser} from "../../../redux/actionCreators/authActionCreator"


const Navbar = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm p-3">
      <Link to="/dashboard" className="navbar-brand ms-5">
        Firebase File Manager
      </Link>
      {isAuthenticated ? (
        <ul className="navbar-nav ms-auto me-5">
          <li className="nav-item mx-2">
            <p className="my-0 mt-2 mx-2">
              <span>Welcome - </span>
              <span className="fw-bold">{user.displayName}</span>
            </p>
          </li>
          <li className="nav-item mx-2">
            <Link className="btn btn-primary" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <button className="btn btn-success" onClick={() => dispatch(signOutUser())}>
              Logout
            </button>
          </li>
        </ul>
      ) : (
        <ul className="navbar-nav ms-auto me-5">
          <li className="nav-item mx-2">
            <Link className="btn btn-primary btn-sm" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="btn btn-success btn-sm" to="/register">
              Register
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};
export default Navbar;
