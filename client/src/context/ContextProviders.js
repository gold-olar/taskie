import React from "react";
import { Provider as CollectionsProvider } from "./collectionsContext";
import { Provider as TasksProvider } from "./tasksContext";

const ContextProvider = ({ children }) => {
  return (
    <CollectionsProvider>
      <TasksProvider>{children}</TasksProvider>
    </CollectionsProvider>
  );
};

export default ContextProvider;
