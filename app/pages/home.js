const firebase = require("../firebase");

const home = async (req, res) => {
  const convos = await firebase.getValues("convos");
  console.log(convos.length);

  res.status(200);
  res.send(convos.filter(Boolean));
};

module.exports = home;
