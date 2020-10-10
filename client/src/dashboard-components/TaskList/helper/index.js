import { notifyUser } from "../../../util/helper-functions";
import { deleteATask, editATask } from "../../../util/operations/tasks";

export const handleDeleteTask = async (
  taskData,
  setLoading,
  removeTaskFromTaskList
) => {
  if (window.confirm("Are you sure ?")) {
    setLoading(true);
    const response = await deleteATask(taskData);
    if (response && response.status) {
      removeTaskFromTaskList(taskData);
    }
    response && setLoading(false);
    response && notifyUser(response);
    return true;
  }
  return false;
};

export const handleMarkingTasks = async (taskData, setLoading, edit) => {
  if (window.confirm("Are you sure ?")) {
    setLoading(true);
    const response = await editATask({
      _id: taskData._id,
      completed: !taskData.completed,
    });
    if (response && response.status) {
      edit(response.data);
    }
    response && setLoading(false);
    response && notifyUser(response);
    return true;
  }
  return false;
};
