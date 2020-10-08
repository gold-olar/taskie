import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const TopNav = ({ logout }) => {
  return (
    <Nav className="justify-content-end" activeKey="/home">
      <Nav.Item>
        <span className="nav-link is-clickable" onClick={() => logout()}>
          Log out
        </span>
      </Nav.Item>
    </Nav>
  );
};

export default TopNav;
