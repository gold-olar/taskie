import React from "react";
import { Col } from "react-bootstrap";
import "./styles.scss";

const SingleTask = ({ task }) => {
  const { completed, description, title } = task;
  return (
    <Col md={12}>
      <div className="task">
        <span>img</span>
        <div>
          <p> {title}</p>
        </div>
      </div>
    </Col>
  );
};

export default SingleTask;
