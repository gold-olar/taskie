const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.json({
    title: "Collections Endpoint",
  });
});

module.exports = router;
