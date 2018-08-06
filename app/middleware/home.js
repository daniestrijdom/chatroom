const firebase = require("../firebase");
const path = require("path");

const home = async (req, res) => {
  const convos = await firebase.getValues("convos");

  const data = convos.filter(Boolean);

  res.render("home", {
    data
  });
};

module.exports = home;
