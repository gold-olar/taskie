import React from "react";
import { ADD_COLECTION } from "../../util/constants";
import "./styles.scss";

const CollectionsSection = ({
  setShowModal,
  setShowSideBar,
  collections,
  userData,
  mediaQuery,
  setCollection,
  currentCollection,
}) => {
  return (
    <>
      <div className="collections-section__header">
        <span>COLLECTIONS</span>
        <span
          onClick={() => {
            mediaQuery === "isMobile" && setShowSideBar(false);
            return setShowModal({
              show: true,
              modalId: ADD_COLECTION,
              data: {
                user: userData,
              },
            });
          }}
        >
          +
        </span>
      </div>
      <div className="collections-section__list">
        {collections && collections.length === 0 ? (
          <p
            onClick={() => {
              mediaQuery === "isMobile" && setShowSideBar(false);
              return setShowModal({
                show: true,
                modalId: ADD_COLECTION,
                data: {
                  user: userData,
                },
              });
            }}
            className="collections-section__get-started"
          >
            {" "}
            Create a collection to get Started
          </p>
        ) : (
          <ul>
            {collections.map((collection) => (
              <li
                className={`is-clickable ${
                  currentCollection === collection._id && "current-collection"
                }`}
                key={collection._id}
                onClick={() => setCollection(collection._id)}
              >
                {collection.title}{" "}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default CollectionsSection;
