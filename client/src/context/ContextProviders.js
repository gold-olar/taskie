import React from "react";
import { Provider as CollectionsProvider } from "./collectionsContext";

const ContextProvider = ({ children }) => {
  return <CollectionsProvider>{children}</CollectionsProvider>;
};

export default ContextProvider;
