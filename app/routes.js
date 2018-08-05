const middleware = require("./middleware");
const router = require("express").Router();

router.get("/", middleware.home);
router.get("/rooms/:id", (req, res) => {
  res.sendStatus(200).json({ all: "good" });
});

module.exports = router;
