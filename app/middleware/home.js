const firebase = require("../firebase");
const path = require("path");

const home = async (req, res) => {
  const convos = await firebase.getValues("convos");

  res.status(200);
  res.sendFile(path.join(__dirname, "../pages/home", "index.html"));
};

module.exports = home;
