const express = require("express");
const server = express();
//const fs = require("fs");
const port = 3000;

const router = require("./routes");

server.use(router);

server.listen(port, () => console.log("App na porta 3000"));