const express   = require("express");
const app       = express();
const path      = require("path");
const logger    = require("morgan");

const PORT = process.env.PORT || 8080;
const IP = process.env.IP;

app.use(express.static("dist"));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
});

app.listen(PORT, IP, () => {
    console.log("Server is listening on port " + PORT);
});
