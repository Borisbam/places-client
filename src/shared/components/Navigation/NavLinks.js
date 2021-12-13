import React, { useContext } from "react";
import "./NavLinks.css";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";

const NavLinks = () => {
  const authContext = useContext(AuthContext);

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          ALL USERS
        </NavLink>
      </li>
      {authContext.isLoggedIn && (
        <li>
          <NavLink to={`/${authContext.userId}/places`}>MY PLACES</NavLink>
        </li>
      )}
      {authContext.isLoggedIn && (
        <li>
          <NavLink to="/places/new">NEW PLACE</NavLink>
        </li>
      )}

      {authContext.isLoggedIn ? (
        <li>
          <NavLink to="/auth" onClick={authContext.logout}>
            LOGOUT
          </NavLink>
        </li>
      ) : (
        <li>
          <NavLink to="/auth">AUTHENTICATE</NavLink>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
