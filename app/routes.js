const pages = require("./pages");
const router = require("express").Router();

router.get("/", pages.home);

module.exports = router;
