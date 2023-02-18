const express = require("express");

const employee = require("./employees");
// import router
// import auth from "./auth";
// import users from "./users";
// import profile from "./profile";
// import post from "./post";

const api = express.Router();

api.use("/employees", employee);
// api.use("/auth", auth);
// api.use("/users", users);
// api.use("/profile", profile);
// api.use("/post", post);

module.exports = api;
