import React, { useState } from "react";
import { Col, Spinner } from "react-bootstrap";
import completedIcon from "../../assets/icons/completed.png";
import pendingIcon from "../../assets/icons/pending.png";
import "./styles.scss";
import editIcon from "../../assets/icons/edit.png";
import deleteIcon from "../../assets/icons/delete.png";
import { VIEW_TASK, EDIT_TASK } from "../../util/constants";

const SingleTask = ({ task, setShowModal, handleDeleteTask }) => {
  const { completed, description, title } = task;
  const [loading, setLoading] = useState(false);
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
        <div
          onClick={() =>
            setShowModal({
              modalId: VIEW_TASK,
              data: {
                task,
              },
              show: true,
            })
          }
        >
          {loading ? (
            <Spinner
              animation="border"
              size="sm"
              role="status"
              aria-hidden={true}
              className="align-baseline"
              variant="primary"
            >
              <span className="sr-only">Loading...</span>
            </Spinner>
          ) : (
            <>
              <p> {title}</p>
              <span>
                {description.length > 60
                  ? `${description.slice(0, 59)} ...`
                  : description}{" "}
              </span>
            </>
          )}
        </div>
        <span>
          <img
            onClick={() =>
              setShowModal({
                modalId: EDIT_TASK,
                data: {
                  taskData: task,
                  editTask: true,
                },
                show: true,
              })
            }
            src={editIcon}
            className="action-icon"
            alt="Edit Icon"
          />

          <img
            onClick={() => handleDeleteTask(task, setLoading)}
            src={deleteIcon}
            className="action-icon"
            alt="Delete Icon"
          />
        </span>
      </div>
    </Col>
  );
};

export default SingleTask;
