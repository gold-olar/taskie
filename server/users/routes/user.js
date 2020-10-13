const { Router } = require("express");
const { getUser, deleteUser } = require("../controllers/user.ctrl");
const { authorizeRequest } = require("../middlewares/authorizer");

const router = Router();

router.get("/:userId", getUser);

router.delete("/:userId", deleteUser);

module.exports = router;
