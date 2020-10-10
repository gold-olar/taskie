import React from "react";
import { Nav } from "react-bootstrap";
import "./styles.scss";
import toggleMenu from "../../assets/icons/menu.png";

const TopNav = ({ logout, mediaQuery, setShowSideBar }) => {
  return (
    <Nav
      className={`justify-content-end ${
        mediaQuery === "isMobile" ? "mb-3" : null
      }`}
    >
      {mediaQuery !== "isMobile" ? (
        <Nav.Item>
          <span
            className="dashboard-nav-link is-clickable"
            onClick={() => logout()}
          >
            Log out
          </span>
        </Nav.Item>
      ) : (
        <Nav.Item>
          <span
            className="dashboard-nav-link is-clickable"
            onClick={() => setShowSideBar(true)}
          >
            <img
              className="top-nav-image"
              src={toggleMenu}
              alt="Show Side bar Icon"
            />
          </span>
        </Nav.Item>
      )}
    </Nav>
  );
};

export default TopNav;
