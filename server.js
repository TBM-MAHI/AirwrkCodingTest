const express = require("express");
const app = express();
let morgan=require('morgan') ;
const axios = require('axios');
const PORT = 5000;
let api_router = require('./api.router');

app.use(morgan('combined'));
app.use(express.json());

app.use("/v1", api_router);

app.listen(PORT, () => console.log( `server running on port ${PORT}`));
