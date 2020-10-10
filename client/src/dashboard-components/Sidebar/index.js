import React from "react";
import { Col } from "react-bootstrap";
import ProfileCard from "../ProfileCard";
import closeIcon from "../../assets/icons/close.png";
import "./styles.scss";

const Sidebar = ({ setShowSideBar, setShowModal, userData, mediaQuery }) => {
  return (
    <>
      <Col className="sidebar shadow" md={3}>
        <div className="sidebar-top-logo text-muted text-center">
          {mediaQuery === "isMobile" && (
            <img
              src={closeIcon}
              onClick={() => setShowSideBar(false)}
              alt="Close Sidebar Icon"
              className="sidebar-__close-icon"
            />
          )}
          TASKIE
        </div>
        <div className="sidebar__profile-seection">
          <ProfileCard
            userData={userData}
            setShowSideBar={setShowSideBar}
            mediaQuery={mediaQuery}
            setShowModal={setShowModal}
          />
        </div>
      </Col>
    </>
  );
};

export default Sidebar;
