const BaseController = require("./base.ctrl");

class TaskController extends BaseController {
  constructor() {
    super();
  }

  async createTask(req, res) {
    const {
      body: { title, description },
    } = req;
    return super.sendSuccess(res, {}, "Created Successfully.", 201);
  }

  async fetchTask(req, res) {
    super.sendSuccess(res, {}, "Created Successfully.", 201);
  }
}

// fetchTask,
// updateTask,
// deleteTask,
// fetchAllTasks,

module.exports = new TaskController();
