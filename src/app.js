const express = require("express");
const logger = require("morgan");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const api = require("./routes/api");

const app = express();

app.use(express.json({ extended: false }));
app.use(helmet());
app.use(logger("dev"));
app.use(bodyParser.json());

app.use("/api", api);

module.exports = app;
