const app = require("express")();
const http = require("http").Server(app);

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
