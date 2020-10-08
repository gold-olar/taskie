const { Router } = require("express");
const { validateTaskCreation } = require("../middlewares/validator");
const {
  createTask,
  // fetchTask,
  // updateTask,
  // deleteTask,
  // fetchAllTasks,
} = require("../controllers/task.ctrl");
const router = Router();

router.post("/create", validateTaskCreation, createTask);

// router.get("/:userId/:taskId", fetchTask);

// router.patch("/:taskId", updateTask);

// router.delete("/:taskId", deleteTask);

// eouter.get("/:userId", fetchAllTasks);

module.exports = router;
