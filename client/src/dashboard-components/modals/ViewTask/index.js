import React from "react";
import "./styles.scss";
import editIcon from "../../../assets/icons/edit.png";
import deleteIcon from "../../../assets/icons/delete.png";
import { EDIT_TASK } from "../../../util/constants";
import { Badge, Button } from "react-bootstrap";

const ViewTask = ({ setShowModal, data }) => {
  const { task, handleDeleteTask } = data;
  return (
    <section className="task-details-section">
      <span className="edit-task-icon-section">
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
          onClick={() => ""}
          src={deleteIcon}
          className="action-icon"
          alt="Delete Icon"
        />
      </span>
      <h5 className="text-center mb-3">Task Details</h5>
      <div className="text-center">
        <Badge variant={task.completed ? "success" : "dark"}>
          {" "}
          {task.completed ? "Complete" : "Pending"}{" "}
        </Badge>
      </div>
      <div className="task__body">
        <h6 className="task__title">{task.title} </h6>
        <p className="task__description">{task.description} </p>
        <Button className="btn-block" variant="primary">
          {" "}
          {task.completed ? "Mark as Pending" : "Mark as Completed"}{" "}
        </Button>
      </div>
    </section>
  );
};

export default ViewTask;
