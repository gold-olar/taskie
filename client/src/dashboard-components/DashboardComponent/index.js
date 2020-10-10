import React from "react";
import TaskList from "../TaskList";
import DashboardHeader from "../DashboardHeader";

const DashboardComponent = ({ mediaQuery, setShowModal }) => {
  return (
    <section className={mediaQuery === "isMobile" ? "px-1" : "px-3"}>
      <DashboardHeader mediaQuery={mediaQuery} />
      <TaskList setShowModal={setShowModal} />
    </section>
  );
};

export default DashboardComponent;
