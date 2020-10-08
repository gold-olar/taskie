import React from "react";
import "./styles.scss";

const TaskieUser = ({ image, name }) => {
  return (
    <div className="taskie-user">
      <img className="img-fluid" src={image} alt={name} />
      <span>{name} </span>
    </div>
  );
};

export default TaskieUser;
