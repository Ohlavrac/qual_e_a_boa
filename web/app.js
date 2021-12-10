const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.listen(port, () => console.log("App na porta 3000"));