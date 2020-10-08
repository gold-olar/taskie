const { Router } = require("express");

const router = Router();

/* GET index page. */
router.get("/", (req, res) => {
  res.json({
    title: "Taskie  Api !!",
  });
});

module.exports = router;
