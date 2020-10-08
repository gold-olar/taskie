const BaseController = require("./base.ctrl");
const User = require("../models/User");

class UserController extends BaseController {
  constructor() {
    super();
  }

  async getUser(req, res) {
    const {
      params: { userId },
    } = req;

    try {
      const existingUser = await User.findOne({ _id: userId });

      if (!existingUser) {
        return super.sendError(res, null, "User not found.", 404);
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

  async deleteUser(req, res) {
    const {
      params: { userId },
    } = req;

    try {
      const deletedUser = await User.findOneAndDelete({ _id: userId });

      if (!deletedUser) {
        return super.sendError(res, null, "User does not exist.", 404);
      }

      return super.sendSuccess(res, null, "User Deleted !", 200);
    } catch (err) {
      return super.sendError(res, err, err.message, err.code);
    }
  }
}

module.exports = new UserController();
