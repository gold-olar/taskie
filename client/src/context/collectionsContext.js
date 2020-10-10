import createDataContext from "./createContext";
import { useMemo } from "react";
import { notifyUser } from "../util/helper-functions";
import { fetchCollections } from "../util/operations/collections";
import { useData } from "../util/useData";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_NEW_COLLECTION":
      return { ...state, collections: [...state.collections, action.payload] };
    case "FETCH_COLLECTIONS_SUCCESSFULLY":
      return action.payload;
    default:
      return state;
  }
};

const addNewCollection = (dispatch) => (colectionData) => {
  dispatch({ type: "ADD_NEW_COLLECTION", payload: colectionData });
};

const fetchAllCollections = (dispatch) => async () => {
  const { status, data, message } = useData(fetchCollections);
  useMemo(() => {
    !status && notifyUser({ status, message });

    data && dispatch({ type: "FETCH_COLLECTIONS_SUCCESSFULLY", payload: data });
  }, [data, status]);
};

export const { Context, Provider } = createDataContext(
  reducer,
  {
    addNewCollection,
    fetchAllCollections,
  },
  {
    collections: [],
  }
);
