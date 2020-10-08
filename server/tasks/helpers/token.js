const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

const encodeToken = (tokenData) => {
  return jwt.sign(tokenData, jwtSecret, { expiresIn: "24h" });
};

const decodeToken = (token) => {
  console.log(token);
  return jwt.verify(token, `${jwtSecret}`);
};

module.exports = {
  encodeToken,
  decodeToken,
};
