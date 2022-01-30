const express = require("express");
const fs = require("fs");
const app = express();

const PORT = 8080;

app.listen(PORT, () => {
  console.log("server started.");
});

app.use(express.static("public"));

/*app.get("/", (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html",
  });

  fs.readFile("./index.html", (err, data) => {
    res.write(data);
    res.end();
  });
});*/
