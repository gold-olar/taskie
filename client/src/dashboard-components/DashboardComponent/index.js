import React, { useEffect, useState } from "react";
import TaskList from "../TaskList";
import DashboardHeader from "../DashboardHeader";
import {
  filterArrayByParam,
  searchArrayByParam,
} from "../../util/helper-functions";

const DashboardComponent = ({
  mediaQuery,
  setShowModal,
  collection,
  collections,
  tasks,
}) => {
  const [currentCollection, setCurrentColection] = useState({});
  const [currentTasks, setCurrentTasks] = useState([]);

  useEffect(() => {
    setCurrentColection(searchArrayByParam(collections, "_id", collection));
    setCurrentTasks(filterArrayByParam(tasks, "collectionId", collection));
  }, [collection, collections, tasks]);

  return (
    <section className={mediaQuery === "isMobile" ? "px-1" : "px-3"}>
      <DashboardHeader
        currentCollection={currentCollection}
        mediaQuery={mediaQuery}
      />
      {collection && (
        <TaskList
          currentCollection={currentCollection}
          currentTasks={currentTasks}
          setShowModal={setShowModal}
        />
      )}
    </section>
  );
};

export default DashboardComponent;
