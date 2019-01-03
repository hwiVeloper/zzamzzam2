const fs = require("fs");
const express = require("express");
const app = express();
const errorHandler = require("errorhandler");
const http = require("http");
const https = require("https");

const React = require("react");
require("babel-register")({
  presets: ["react"]
});
const ReactDOMServer = require("react-dom/server");
const About = React.createFactory(require("./components/about.jsx"));

app.set("view engine", "hbs");

// app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res, next) => {
  res.send("Hello!");
});

app.get("/about", (req, res, next) => {
  const aboutHTML = ReactDOMServer.renderToString(About());
  res.render("about", { about: aboutHTML });
});

app.all("*", (req, res, next) => {
  res.status(404).send("Not Found...");
});

app.use((error, req, res, next) => {
  console.error(req.url, error);
  res.send("Wonderful, something went wrong!!");
});
app.use(errorHandler);

http.createServer(app).listen(3000);

// try {
//   const options = {
//     key: fs.readFileSync("./server.key"),
//     cert: fs.readFileSync("./server.crt")
//   };
// } catch (e) {
//   console.warn("Create server. key and server.crt for HTTPS");
// }
// if (typeof options != "undefined") https.createServer(app, options).listen(443);
