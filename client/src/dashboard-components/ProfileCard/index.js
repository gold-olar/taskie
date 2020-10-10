import React from "react";
import { ProgressBar, Button } from "react-bootstrap";
import image from "../../assets/images/default-avatar.png";
import "./styles.scss";
import { taskStats, EDIT_PROFILE, ADD_TASK } from "../../util/constants";
import CollectionsSection from "../CollectionsSection";

const ProfileCard = ({
  setShowSideBar,
  mediaQuery,
  setShowModal,
  userData,
  setCollection,
  collections,
  currentCollection,
}) => {
  const { firstName, lastName, email } = userData;
  return (
    <>
      <div className="profile-card">
        <div>
          <img className="profile-card__img" src={image} alt="User" />
          <div className="text-center profile-card__profile-text">
            <span>
              {firstName} {lastName}
            </span>
            <span className="text-muted"> {email} </span>
            <span>
              {" "}
              <Button
                onClick={() => {
                  mediaQuery === "isMobile" && setShowSideBar(false);
                  return setShowModal({
                    show: true,
                    modalId: EDIT_PROFILE,
                    data: {
                      user: userData,
                    },
                  });
                }}
                variant="link"
                className=" mt-2 btn-sm text-decoration-none"
              >
                {" "}
                Edit profile
              </Button>{" "}
            </span>
          </div>
        </div>
        <div className="progress-section">
          <div className="progress-section__bar">
            <span> Tasks Completed</span>
            <ProgressBar className="profile-card__progress-bar" now={30} />
          </div>
          <div className="stats-section">
            {taskStats.map((taskStat) => (
              <div key={taskStat}>
                <span> {Math.ceil(Math.random() * 50)}</span>
                <span>{taskStat}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="collections-section">
          <CollectionsSection
            currentCollection={currentCollection}
            setShowModal={setShowModal}
            setShowSideBar={setShowSideBar}
            collections={collections}
            userData={userData}
            mediaQuery={mediaQuery}
            setCollection={setCollection}
          />
        </div>
        <div className="dashboard-cta-section">
          <Button
            onClick={() => {
              mediaQuery === "isMobile" && setShowSideBar(false);
              return setShowModal({
                show: true,
                modalId: ADD_TASK,
                data: {},
              });
            }}
            variant="primary"
            className="btn-block btn-sm"
          >
            Add Task
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
