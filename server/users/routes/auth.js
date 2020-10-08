const { Router } = require("express");
const {
  validateRegisteration,
  validateLogin,
} = require("../middlewares/validator");
const { register, login, getAuthUser } = require("../controllers/auth.ctrl");
const { authorizeRequest } = require("../middlewares/authorizer");

const router = Router();

router.post("/register", validateRegisteration, register);

router.post("/login", validateLogin, login);

router.get("/user", authorizeRequest, getAuthUser);

module.exports = router;
