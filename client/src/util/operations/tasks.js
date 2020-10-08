import { apiRequest } from "../apiRequest";

const createATask = (taskData) => {
  return apiRequest("/task/create", "POST", taskData);
};

const editATask = (taskData) => {
  return apiRequest("/task", "PATCH", taskData);
};

export { createATask, editATask };
