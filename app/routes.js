const middleware = require("./middleware");
const router = require("express").Router();

router.get("/", middleware.home);

module.exports = router;
