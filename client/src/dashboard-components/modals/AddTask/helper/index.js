import { notifyUser } from "../../../../util/helper-functions";
import { createATask, editATask } from "../../../../util/operations/tasks";

export const handleTasks = async (
  formData,
  editTask,
  taskData = {},
  setLoading,
  setShowModal,
  addNewTask,
  edit
) => {
  setLoading(true);
  const newTaskData = {
    ...taskData,
    ...formData,
  };
  const response = editTask
    ? await editATask(newTaskData)
    : await createATask(newTaskData);
  response && setLoading(false);
  response && notifyUser(response);
  if (response && response.status) {
    editTask ? edit(response.data) : addNewTask(response.data);
    return setShowModal({
      show: false,
    });
  }
};
