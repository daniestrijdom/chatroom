const dotenv = require("dotenv-safe").config();
const logger = require("logops");

const app = require("express")();
const http = require("http").Server(app);

const env = process.env.NODE_ENV || "development";
if (env !== "test") {
  logger.setLevel("DEBUG");
}

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
  logger.debug(`Serving on port ${port}`);
});
