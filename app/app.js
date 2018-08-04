const dotenv = require("dotenv-safe").config();
const logger = require("logops");
const path = require("path");

const express = require("express");
const app = express();
const http = require("http").Server(app);

const env = process.env.NODE_ENV || "development";
if (env !== "test") {
  logger.setLevel("DEBUG");
}

// health check endpoint
app.use("/healthCheck", function healthCheck(req, res) {
  res.sendStatus(200);
});

const routes = require("./routes");
app.use(routes);

// connect to firebase
const firebase = require("./firebase");
firebase.init();

// make static assets available
const templates = path.join(__dirname, "templates");
app.set("view engine", "ejs");
app.set("views", templates);
app.use(express.static(templates));

const port = process.env.PORT || 3000;
http.listen(port, () => {
  logger.debug(`Serving on port ${port}`);
});
