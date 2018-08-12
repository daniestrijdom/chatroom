const middleware = require("./middleware");
const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/rules", (req, res) => {
  res.render("rules");
});

module.exports = router;
