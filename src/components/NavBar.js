import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ home }) => (
  <NavLink exact to="/">
    <nav className="uk-section-primary uk-text-center">
      {!home ? (
        <h1>
          <span uk-icon="icon: home" />
        </h1>
      ) : (
        <h1>IronBeers</h1>
      )}
    </nav>
  </NavLink>
);

export default NavBar;
