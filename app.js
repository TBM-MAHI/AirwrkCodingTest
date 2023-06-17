const express = require("express");
const app = express();
let morgan = require("morgan");
let api_router = require("./api.router");

app.use(morgan("combined"));
app.use(express.json());

app.use("/v1", api_router);

module.exports = app;