const express = require("express");
const route = require("./routers/index.js");

const app = express();

//use json body parser
app.use(express.json());

//main router
app.use("/v1", route);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
