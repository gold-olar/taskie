const { Router } = require("express");
const {
  createCollection,
  fetchCollections,
  deleteCollection,
} = require("../controllers/collection.ctrl");
const { deleteTasksInCollection } = require("../controllers/task.ctrl");
const { validateCollectionCreation } = require("../middlewares/validator");

const router = Router();

router.get("/", fetchCollections);

router.post("/create", validateCollectionCreation, createCollection);

router.delete("/:collectionId", deleteCollection, deleteTasksInCollection);

module.exports = router;
