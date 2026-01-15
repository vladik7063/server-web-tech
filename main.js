
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const http = require("http");

const app = express();
const PORT = process.env.PORT || 3000;

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
  "Access-Control-Allow-Headers":
    "x-test,ngrok-skip-browser-warning,Content-Type,Accept,Access-Control-Allow-Headers",
};

const s = http.createServer((req, res) => {
  if (req.url === "/result4/") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      let parsedBody = body;

      res.writeHead(200, { ...CORS });

      res.write(
        JSON.stringify({
          message: "73571251-0d67-43a6-8f17-71d0f123732a",
          "x-result": req.headers["x-test"],
          "x-body": String(parsedBody),
        })
      );

      res.end();
    });

    return;
  }

  res.end();
});

s.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
