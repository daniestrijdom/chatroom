const middleware = require("./middleware");
const router = require("express").Router();

router.get("/", middleware.home);
router.get("/rooms/:id/", middleware.room);

module.exports = router;
