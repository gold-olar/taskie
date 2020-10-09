import React from "react";
import { Col } from "react-bootstrap";

import TopNav from "../TopNav";

const DashboardContainer = ({ children, mediaQuery, logout }) => {
  return (
    <>
      <Col
        className="mt-3 p-2"
        md={{
          span: mediaQuery === "isDesktop" ? 9 : 12,
          offset: mediaQuery === "isDesktop" ? 3 : 0,
        }}
      >
        <TopNav logout={logout} />
        {children}
      </Col>
    </>
  );
};

export default DashboardContainer;
