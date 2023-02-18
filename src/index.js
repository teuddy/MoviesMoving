const express = require("express");
const route = require("./routers/index.js");
const db = require("./models");

//admin pannel
const AdminBro = require("admin-bro");
const AdminBroExpress = require("@admin-bro/express");
const AdminBroSequelize = require("@admin-bro/sequelize");

//register adapter
AdminBro.registerAdapter(AdminBroSequelize);

//set up admin bro
const adminBro = new AdminBro({
  databases: [db],
  rootPath: "/admin",
});

const router = AdminBroExpress.buildRouter(adminBro);

const app = express();

//use json body parser
app.use(express.json());

//admin router
app.use(adminBro.options.rootPath, router);

//main router
app.use("/v1", route);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
