"use strict";

const express = require("express")
      , app = express()
      , port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log("Server running on", port);
});
