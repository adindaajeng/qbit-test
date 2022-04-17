import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userLogout } from "../redux/action/user";

const NavHeader = () => {
  const dispatch = useDispatch();

  const logOutBtn = () => {
    dispatch(userLogout());
  };

  const user = useSelector((state) => {
    return state.user;
  });

  return (
    <div className="nav-container">
      <h3>
        <Link to="/" className="txt-color">
          QBIT TEST
        </Link>
      </h3>

      <div>
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/about" className="nav-item">
          About
        </Link>
        {user.username && (
          <Link to="/posting" className="nav-item">
            Posting
          </Link>
        )}
      </div>

      {user.username ? (
        <div className="dropdown">
          <h3 className="pointer">Welcome, {user.username}</h3>
          <div class="dropdown-content">
            <p className="h6 pointer">
              <Link to="/about">About</Link>
            </p>
            <p className="h6 pointer" onClick={logOutBtn}>
              Logout
            </p>
          </div>
        </div>
      ) : (
        <button className="nav-btn">
          <Link to="/login">Login</Link>
        </button>
      )}
    </div>
  );
};

export default NavHeader;
