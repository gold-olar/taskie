const BaseController = require("./base.ctrl");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { encodeToken } = require("../helpers/token");

class AuthController extends BaseController {
  constructor() {
    super();
  }

  async register(req, res) {
    const {
      body: { email, password, firstName, lastName },
    } = req;
    try {
      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return super.sendError(
          res,
          null,
          "User already exists, Please Log in",
          400
        );
      }

      const userParams = {
        password,
        email,
        firstName,
        lastName,
      };

      const newUser = new User(userParams);

      return bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (error, hash) => {
          if (error) throw error;
          newUser.password = hash;
          newUser
            .save()
            .then((user) =>
              super.sendSuccess(res, user, "User Created !", 201)
            );
        });
      });
    } catch (err) {
      return super.sendError(res, err, err.message, err.code);
    }
  }

  async login(req, res) {
    const {
      body: { email, password },
    } = req;

    try {
      const existingUser = await User.findOne({ email });

      if (!existingUser) {
        return super.sendError(
          res,
          null,
          "User does not exist, Please register.",
          400
        );
      }

      return bcrypt.compare(password, existingUser.password, (err, success) => {
        if (success) {
          const tokenData = {
            userId: existingUser._id,
            email,
          };

          const token = encodeToken(tokenData);

          return super.sendSuccess(res, { token }, "Login Success !", 200);
        }
        return super.sendError(res, null, "Password is incorrect.", 400);
      });
    } catch (err) {
      return super.sendError(res, err, err.message, err.code);
    }
  }

  async getAuthUser(req, res) {
    try {
      const {
        headers: { user },
      } = req;
      const { userId } = JSON.parse(user);

      const existingUser = await User.findOne({ _id: userId });

      if (!existingUser) {
        return super.sendError(
          res,
          null,
          "This user must have been deleted.",
          400
        );
      }

      return super.sendSuccess(
        res,
        { user: existingUser },
        "Fetched User !",
        200
      );
    } catch (err) {
      return super.sendError(res, err, err.message, err.code);
    }
  }
}

module.exports = new AuthController();
