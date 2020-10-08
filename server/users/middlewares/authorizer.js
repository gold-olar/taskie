const BaseController = require("../controllers/base.ctrl");
const { decodeToken } = require("../helpers/token");

class AuthorizerMiddleware extends BaseController {
  constructor() {
    super();
  }

  async authorizeRequest(req, res, next) {
    try {
      const {
        headers: { token },
      } = req;
      if (token === undefined || token === null || token === "") {
        return super.sendError(res, null, "Token does not exist", 401);
      }
      const decodedToken = decodeToken(token);

      if (!decodedToken) {
        return super.sendError(res, null, "Unauthorized", 401);
      }
      req.user = decodedToken;

      return next();
    } catch (err) {
      return super.sendError(res, err, err.message, 401);
    }
  }
}

module.exports = new AuthorizerMiddleware();
