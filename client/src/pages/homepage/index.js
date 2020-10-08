import React from "react";
import HeroSection from "../../components/HeroSection";
import TaskiUsers from "../../components/TaskiUsers";

const HomePage = ({ mediaQuery }) => {
  return (
    <>
      <HeroSection mediaQuery={mediaQuery} />
      <TaskiUsers mediaQuery={mediaQuery} />
    </>
  );
};

export default HomePage;
