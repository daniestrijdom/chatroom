const middleware = require("./middleware");
const router = require("express").Router();

router.get("/", middleware.room);

module.exports = router;
