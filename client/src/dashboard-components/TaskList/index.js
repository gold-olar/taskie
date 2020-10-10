import React from "react";
import "./styles.scss";
import SingleTask from "../SingleTask";
import { Col, Row } from "react-bootstrap";
import { handleMarkingTasks, handleDeleteTask } from "./helper";
import { ADD_TASK } from "../../util/constants";

const TaskList = ({ setShowModal, currentTasks, currentCollection }) => {
  return (
    <section className="task-list-section ">
      <Row>
        {currentTasks && currentTasks.length === 0 ? (
          <Col>
            <p
              onClick={() => {
                return setShowModal({
                  show: true,
                  modalId: ADD_TASK,
                  data: {
                    currentCollection,
                  },
                });
              }}
              className="task-list-section__get-started"
            >
              No tasks in this collection yet ! Create a task now !
            </p>
          </Col>
        ) : (
          <>
            {currentTasks.map((task) => (
              <SingleTask
                setShowModal={setShowModal}
                handleDeleteTask={handleDeleteTask}
                handleMarkingTasks={handleMarkingTasks}
                task={task}
                key={task._id}
              />
            ))}
          </>
        )}
      </Row>
    </section>
  );
};

export default TaskList;
