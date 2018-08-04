const app = require("express")();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("info", `Serving port port ${port}`);
});
