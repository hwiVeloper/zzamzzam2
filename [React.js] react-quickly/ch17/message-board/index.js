require("babel-register")({
  presets: ["react"]
});

const express = require("express"),
  mongodb = require("mongodb"),
  app = express(),
  bodyParser = require("body-parser"),
  validator = require("express-validator"),
  logger = require("morgan"),
  errorHandler = require("errorhandler"),
  compression = require("compression"),
  url = "mongodb://ds161016.mlab.com:61016/react-study",
  ReactDOMServer = require("react-dom/server"),
  React = require("react");

const Header = React.createFactory(require("./components/header.jsx")),
  Footer = React.createFactory(require("./components/footer.jsx")),
  MessageBoard = React.createFactory(require("./components/board.jsx"));

mongodb.MongoClient.connect(
  url,
  (err, db) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    app.set("view engine", "hbs");

    app.use(compression());
    app.use(logger("dev"));
    app.use(errorHandler());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(validator());
    app.use(express.static("public"));

    app.use((req, res, next) => {
      req.messages = db.collection("messages");
      return next();
    });

    app.get("/messages", (req, res, next) => {
      //
    });

    app.post("/messages", (req, res, next) => {
      //
    });

    app.get("/", (req, res, next) => {
      //
    });

    app.listen(3000);
  }
);
