const logger = require("logops");
const Chance = require("chance");
const randomcolor = require("randomcolor");

const fakeName = () => {
  const chance = new Chance();
  return chance.string({ length: 10, pool: "ABCDEFGHIJKLMNOPQRSTUV" });
};

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
      const currentUser = users.filter(
        user => user.username === socket.username
      );

      console.log(currentUser);
      const [{ username, color }] = currentUser;
      io.sockets.emit("new message", { msg: data, user: username, color });
    });

    // new user
    socket.on("new user", function(data, callback) {
      const color = randomcolor({
        luminosity: "light",
        hue: "green"
      });

      callback(true);

      const username = data !== "" ? data : fakeName();

      socket.username = username;
      users.push({ username, color });
      updateUsernames();
    });

    const updateUsernames = () => {
      io.sockets.emit("get users", users);
    };
  });
};

module.exports = { connect };
