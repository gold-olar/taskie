if (process.env.NODE_ENV === "production") {
  module.exports = {
    mongoURI:
      "mongodb://taskie-admin:taskie-admin123@ds263295.mlab.com:63295/taskie",
  };
} else {
  module.exports = { mongoURI: "mongodb://db:27017/taskie" };
}
