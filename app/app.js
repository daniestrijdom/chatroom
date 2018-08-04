const dotenv = require("dotenv-safe").config();

const app = require("express")();
const http = require("http").Server(app);

const firebase = require("./firebase");
firebase.init();

// health check endpoint
app.use("/healthCheck", function healthCheck(req, res) {
  res.sendStatus(200);
});

const routes = require("./routes");
app.use(routes);

const port = process.env.PORT || 3000;

http.listen(port, () => {
  console.log("info", `Serving port port ${port}`);
});
