import React from "react";
import { ADD_COLECTION } from "../../util/constants";
import "./styles.scss";

const DashboardHeader = ({
  mediaQuery,
  setShowModal,
  currentCollection,
  userData,
}) => {
  return (
    <>
      <div
        className={`${
          mediaQuery === "isMobile" ? "mb-3" : null
        } dashboard-header-section`}
      >
        <h5 className="text-muted"> {currentCollection?.title}</h5>
        <span
          onClick={() => {
            return setShowModal({
              show: true,
              modalId: ADD_COLECTION,
              data: {
                user: userData,
              },
            });
          }}
        >
          {" "}
          + Add Collection{" "}
        </span>
      </div>
    </>
  );
};

export default DashboardHeader;
