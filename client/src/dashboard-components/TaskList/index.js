import React from "react";
import "./styles.scss";
import SingleTask from "../SingleTask";
import { Row } from "react-bootstrap";
import { sampleTasks, handleDeleteTask } from "./helper";

const TaskList = ({ setShowModal }) => {
  return (
    <section className="task-list-section ">
      <Row>
        {sampleTasks.map((task) => (
          <SingleTask
            setShowModal={setShowModal}
            handleDeleteTask={handleDeleteTask}
            task={task}
            key={task.id}
          />
        ))}
      </Row>
    </section>
  );
};

export default TaskList;
