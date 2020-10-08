const { Router } = require("express");
const { validateTaskCreation } = require("../middlewares/validator");
const {
  createTask,
  fetchTask,
  updateTask,
  deleteTask,
  fetchAllTasks,
} = require("../controllers/task.ctrl");
const router = Router();

router.post("/create", validateTaskCreation, createTask);

router.patch("/:taskId", updateTask);

router.get("/:taskId", fetchTask);

router.delete("/:taskId", deleteTask);

router.get("/", fetchAllTasks);

module.exports = router;
