import { apiRequest } from "../apiRequest";

const createATask = (taskData) => {
  return apiRequest("/taskie/task/create", "POST", taskData);
};

const editATask = (taskData) => {
  return apiRequest("/taskie/task", "PATCH", taskData);
};

export { createATask, editATask };
