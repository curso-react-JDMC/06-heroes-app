import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
const navigate = useNavigate();
  const handleLogout = () => {
    //TODO: por hacer
    console.log("logout");
    navigate("/login",{
      replace:true
    })
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-item nav-link active" : "nav-item nav-link"
            }
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            //activeClassName="active"
            className={({ isActive }) =>
              isActive ? "nav-item nav-link active" : "nav-item nav-link"
            }
            to="/dc"
          >
            DC
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-info">Juan David Mendez</span>
          <button className="nav-item nav-link btn" onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
