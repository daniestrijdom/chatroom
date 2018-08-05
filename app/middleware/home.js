const firebase = require("../firebase");
const path = require("path");

const home = async (req, res) => {
  const convos = await firebase.getValues("convos");

  const data = convos.filter(Boolean);

  res.render("home/index", {
    data
  });
};

module.exports = home;
