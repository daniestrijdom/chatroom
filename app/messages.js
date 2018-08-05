const logger = require("logops");

const connect = httpModule => {
  const io = require("socket.io")(httpModule);

  io.on("connection", function(socket) {
    logger.debug("a user connected");
    socket.on("disconnect", function() {
      logger.debug("user disconnected");
    });
  });
};

module.exports = { connect };
