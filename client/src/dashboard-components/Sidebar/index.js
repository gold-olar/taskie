import React from "react";
import { Col } from "react-bootstrap";
import ProfileCard from "../ProfileCard";
import "./styles.scss";

const Sidebar = ({ setShowModal, userData }) => {
  return (
    <>
      <Col className="sidebar shadow" md={3}>
        <div className="sidebar-top-logo text-muted text-center">TASKIE</div>
        <div className="sidebar__profile-seection">
          <ProfileCard userData={userData} setShowModal={setShowModal} />
        </div>
      </Col>
    </>
  );
};

export default Sidebar;
