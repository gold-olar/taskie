if (process.env.NODE_ENV === "production") {
  module.exports = {
    mongoURI:
      "mongodb+srv://taskie-admin:taskieadmin@taskie.z2xyu.mongodb.net/<dbname>?retryWrites=true&w=majority",
  };
} else {
  module.exports = { mongoURI: "mongodb://db:27017/taskie" };
}
