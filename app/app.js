const logger = require("logops");
const path = require("path");

const express = require("express");
const app = express();
const http = require("http").Server(app);

const env = process.env.NODE_ENV || "development";
if (env !== "test") {
  logger.setLevel("DEBUG");
  require("dotenv-safe").config({ silent: true, allowEmptyValues: true });
}

const routes = require("./routes");
app.use(routes);

// health check endpoint
app.use("/healthCheck", function healthCheck(req, res) {
  res.sendStatus(200);
});

// make static assets available
app.engine(".html", require("ejs").__express);
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "html");

// connect to socket io
const sockets = require("./io");
sockets.connect(http);

const port = process.env.PORT || 3000;
http.listen(port, () => {
  logger.debug(`Serving on port ${port}`);
});
