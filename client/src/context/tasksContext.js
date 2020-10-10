import createDataContext from "./createContext";
import { useMemo } from "react";
import { notifyUser } from "../util/helper-functions";
import { useData } from "../util/useData";
import { fetchTasks } from "../util/operations/tasks";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_NEW_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };
    case "EDIT_A_TASK":
      return {
        ...state,
        tasks: [
          ...state.tasks.filter((task) => task._id !== action.payload._id),
          action.payload,
        ],
      };
    case "FETCH_TASKS_SUCCESFULLY":
      return action.payload;
    case "REMOVE_TASK":
      return {
        ...state,
        tasks: [
          ...state.tasks.filter((task) => task._id !== action.payload._id),
        ],
      };
    default:
      return state;
  }
};

const addNewTask = (dispatch) => (taskData) => {
  dispatch({ type: "ADD_NEW_TASK", payload: taskData.task });
};
const editATask = (dispatch) => (taskData) => {
  dispatch({ type: "EDIT_A_TASK", payload: taskData.task });
};

const removeTaskFromTaskList = (dispatch) => (taskData) => {
  dispatch({ type: "REMOVE_TASK", payload: taskData });
};

const fetchAllTasks = (dispatch) => async () => {
  const { status, data, message } = useData(fetchTasks);
  useMemo(() => {
    !status && notifyUser({ status, message });

    data && dispatch({ type: "FETCH_TASKS_SUCCESFULLY", payload: data });
  }, [data, status]);
};

export const { Context, Provider } = createDataContext(
  reducer,
  {
    addNewTask,
    fetchAllTasks,
    editATask,
    removeTaskFromTaskList,
  },
  {
    tasks: [],
  }
);
