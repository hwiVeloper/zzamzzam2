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
  url = "mongodb://hwiveloper:paper0817@ds161016.mlab.com:61016/react-study",
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

    console.log("Connected");

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
      req.messages.find({}, { sort: { _id: -1 } }).toArray((err, docs) => {
        if (err) return next(err);
        return res.json(docs);
      });
    });

    app.post("/messages", (req, res, next) => {
      req.checkBody("message", "Invalid message in body").notEmpty();
      req.checkBody("name", "Invalid name in body").notEmpty(); // 요청 내용에 있는 메세지 확인
      var errors = req.validationErrors();
      if (errors) return next(errors);
      req.messages.insert(req.body, (err, result) => {
        // 요청 내용을 데이터베이스에 추가
        if (err) return next(err);
        return res.json(result.ops[0]); // 데이터베이스에서 자동 생성된 새로운 문서의 id를 출력
      });
    });

    app.get("/", (req, res, next) => {
      req.messages.find({}, { sort: { _id: -1 } }).toArray((err, docs) => {
        if (err) return next(err);
        res.render("index", {
          header: ReactDOMServer.renderToString(Header()),
          footer: ReactDOMServer.renderToString(Footer()),
          messageBoard: ReactDOMServer.renderToString(
            MessageBoard({
              messages: docs
            })
          ),
          props:
            '<script type="text/javascript">var messages=' +
            JSON.stringify(docs) +
            "</script>"
        });
      });
    });

    app.listen(3000);
  }
);
