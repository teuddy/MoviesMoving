//admin pannel
const AdminBro = require("admin-bro");
const AdminBroExpress = require("@admin-bro/express");
const AdminBroSequelize = require("@admin-bro/sequelize");
const db = require("../../models/index.js");

//register adapter
AdminBro.registerAdapter(AdminBroSequelize);

//set up admin bro
const adminBro = new AdminBro({
  databases: [db],
  rootPath: "/admin",
});

const router = AdminBroExpress.buildRouter(adminBro);

module.exports = { router, adminBro };
