const logger = require("logops");

const connect = httpModule => {
  const io = require("socket.io")(httpModule);
  const connections = [];

  io.on("connection", function(socket) {
    connections.push(socket);
    logger.debug(`new user connected, connections: ${connections.length}`);

    // disconnect
    socket.on("disconnect", function() {
      connections.splice(connections.indexOf(socket), 1);
      logger.debug(`user disconnected, connections: ${connections.length}`);
    });

    // send message
    socket.on("send message", function(data) {
      io.sockets.emit("new message", { msg: data });
    });
  });
};

module.exports = { connect };
