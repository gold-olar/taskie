import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./styles.scss";
import { NavLink } from "react-router-dom";
import logoWhite from "../../assets/images/logo-white.png";
import logooBlue from "../../assets/images/logo-blue.png";

const NavigationBar = ({ logoColor }) => {
  return (
    <>
      <Navbar className="navigation-bar" fixed="top" sticky="top" expand="md">
        <Navbar.Brand>
          <NavLink to="/">
            <img
              className="navigation-bar-logo"
              src={logoColor === "white" ? logoWhite : logooBlue}
              alt="Logo"
            />{" "}
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink className="nav-link" to="/user/register">
              Register{" "}
            </NavLink>
            <NavLink className="nav-link" to="/user/login">
              Login{" "}
            </NavLink>
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavigationBar;
