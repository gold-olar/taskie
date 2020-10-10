import React from "react";
import "./styles.scss";

const DashboardHeader = ({ mediaQuery }) => {
  return (
    <>
      <div
        className={`${
          mediaQuery === "isMobile" ? "mb-3" : null
        } dashboard-header-section`}
      >
        <h5 className="text-muted"> All Tasks</h5>
        <span> add Task</span>
      </div>
    </>
  );
};

export default DashboardHeader;
