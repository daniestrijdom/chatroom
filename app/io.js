const logger = require("logops");

const connect = httpModule => {
  const io = require("socket.io")(httpModule);
  const connections = [];
  const users = [];

  io.on("connection", function(socket) {
    connections.push(socket);
    logger.debug(`new user connected, connections: ${connections.length}`);

    // disconnect
    socket.on("disconnect", function() {
      users.splice(users.indexOf(socket.username), 1);
      updateUsernames();
      connections.splice(connections.indexOf(socket), 1);
      logger.debug(`user disconnected, connections: ${connections.length}`);
    });

    // send message
    socket.on("send message", function(data) {
      io.sockets.emit("new message", { msg: data, user: socket.username });
    });

    // new user
    socket.on("new user", function(data, callback) {
      callback(true);
      socket.username = data;
      users.push(socket.username);
      updateUsernames();
    });

    const updateUsernames = () => {
      io.sockets.emit("get users", users);
    };
  });
};

module.exports = { connect };
