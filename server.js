const express = require("express");
const fs = require("fs");
const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("server started.");
});

app.use(express.static("public"));
