const logger = require("logops");

const room = (req, res) => {
  logger.debug(req.params.id);

  res.render("rooms/index");
};

module.exports = room;
