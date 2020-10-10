const BaseController = require("./base.ctrl");
const Task = require("../models/Tasks");

class TaskController extends BaseController {
  constructor() {
    super();
  }

  async createTask(req, res) {
    const {
      body: { title, description, collectionId },
      headers: { user },
    } = req;
    const { userId } = JSON.parse(user);
    try {
      const taskData = {
        title,
        description,
        collectionId,
        userId,
      };

      const newTask = new Task(taskData);

      newTask
        .save()
        .then((task) =>
          super.sendSuccess(res, { task }, "Task Created !", 201)
        );
    } catch (err) {
      return super.sendError(res, err, err.message, err.code);
    }
  }

  async fetchTask(req, res) {
    try {
      const {
        params: { taskId },
      } = req;

      const existingTask = await Task.findOne({ _id: taskId });

      if (!existingTask) {
        return super.sendError(res, null, "Task does not exist", 404);
      }

      return super.sendSuccess(res, { existingTask }, "Fetched Task !", 200);
    } catch (err) {
      return super.sendError(res, err, err.message, err.code);
    }
  }

  async fetchAllTasks(req, res) {
    try {
      const {
        headers: { user },
      } = req;
      const { userId } = JSON.parse(user);

      const tasks = await Task.find({ userId });

      if (!tasks) {
        return super.sendError(res, null, "You donot have any tasks", 404);
      }

      return super.sendSuccess(res, { tasks }, "Fetched Tasks !", 200);
    } catch (err) {
      return super.sendError(res, err, err.message, err.code);
    }
  }

  async deleteTask(req, res) {
    const {
      params: { taskId },
    } = req;
    try {
      const taskExists = await Task.find({ _id: taskId });
      if (!taskExists) {
        return super.sendError(res, null, "Task does not exist.", 400);
      }

      await Task.findOneAndDelete({
        _id: taskId,
      });

      return super.sendSuccess(res, null, "Task deleted !", 200);
    } catch (err) {
      return super.sendError(res, err, err.message, err.code);
    }
  }

  async deleteTasksInCollection(req, res) {
    const {
      params: { collectionId },
    } = req;
    try {
      await Task.deleteMany({ collectionId });

      return super.sendSuccess(res, null, "Deleted Successfully !", 200);
    } catch (err) {
      return super.sendError(res, err, err.message, err.code);
    }
  }

  async updateTask(req, res) {
    try {
      const {
        params: { taskId },
        body,
      } = req;
      const task = await Task.findOneAndUpdate({ _id: taskId }, body, {
        new: true,
      });

      if (!task) {
        return super.sendError(res, null, "Task does not exist", 404);
      }

      return super.sendSuccess(res, { task }, "Task Updated !", 200);
    } catch (err) {
      return super.sendError(res, err, err.message, err.code);
    }
  }
}

module.exports = new TaskController();
