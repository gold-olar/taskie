import React, { useContext, useEffect, useState } from "react";
import TaskList from "../TaskList";
import DashboardHeader from "../DashboardHeader";
import { searchArrayByParam } from "../../util/helper-functions";

const DashboardComponent = ({
  mediaQuery,
  setShowModal,
  collection,
  collections,
}) => {
  const [currentCollection, setCurrentColection] = useState({});

  useEffect(() => {
    setCurrentColection(searchArrayByParam(collections, "_id", collection));
  }, [collection]);

  return (
    <section className={mediaQuery === "isMobile" ? "px-1" : "px-3"}>
      <DashboardHeader
        currentCollection={currentCollection}
        mediaQuery={mediaQuery}
      />
      <TaskList setShowModal={setShowModal} />
    </section>
  );
};

export default DashboardComponent;
