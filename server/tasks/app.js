const cookieParser = require("cookie-parser");
const express = require("express");
const httpErrors = require("http-errors");
const logger = require("morgan");
const path = require("path");
const mongoose = require("mongoose");
const db = require("./config/database");
require("dotenv").config();

const tasksRouter = require("./routes/tasks");
const collectionsRouter = require("./routes/collections");

const app = express();

mongoose
  .connect(db.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/taskie/tasks", tasksRouter);
app.use("/api/taskie/collections", collectionsRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(httpErrors(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err);
});

module.exports = app;
