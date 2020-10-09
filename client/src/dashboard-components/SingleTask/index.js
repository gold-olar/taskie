import React from "react";
import { Col, Button } from "react-bootstrap";
import completedIcon from "../../assets/icons/completed.png";
import pendingIcon from "../../assets/icons/pending.png";
import "./styles.scss";

const SingleTask = ({ task }) => {
  const { completed, description, title } = task;
  return (
    <Col md={12}>
      <div className="task">
        <span>
          <img
            className="task__status-icon"
            src={completed ? completedIcon : pendingIcon}
            alt="Task Status Icon"
          />
        </span>
        <div>
          <p> {title}</p>
          <span>
            {description.length > 60
              ? `${description.slice(0, 59)} ...`
              : description}{" "}
          </span>
        </div>
        <Button className="btn-sm text-decoration-none" variant="link">
          {" "}
          Details
        </Button>
      </div>
    </Col>
  );
};

export default SingleTask;
