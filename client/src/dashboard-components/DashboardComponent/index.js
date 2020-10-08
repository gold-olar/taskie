import React from "react";
import TaskList from "../TaskList";
import DashboardHeader from "../DashboardHeader";

const DashboardComponent = () => {
  return (
    <section className="p-5">
      <DashboardHeader />
      <TaskList />
    </section>
  );
};

export default DashboardComponent;
