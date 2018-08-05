const logger = require("logops");

const room = (req, res) => {
  logger.debug(req.params.id);
  res.sendStatus(418);
};

module.exports = room;
