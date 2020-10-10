import { apiRequest } from "../apiRequest";

const createATask = (taskData) => {
  return apiRequest("/taskie/tasks/create", "POST", taskData);
};

const editATask = (taskData) => {
  return apiRequest(`/taskie/tasks/${taskData._id}`, "PATCH", taskData);
};

const deleteATask = (taskData) => {
  return apiRequest(`/taskie/tasks/${taskData._id}`, "DELETE");
};

const fetchTasks = () => {
  return apiRequest("/taskie/tasks", "GET");
};

export { createATask, editATask, fetchTasks, deleteATask };
