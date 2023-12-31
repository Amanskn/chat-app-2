const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;
const mongo_uri = process.env.MONGO_URI;
const { connectDB } = require("./config/db.js");

// ----------------custom middleware
// app.use((req, res, next) => {
//   console.log("Middleware:-", req.url);
//   next();
// });
app.get(["/health", "/"], (req, res) => {
  // console.log("req.url is :-", req.url);
  // res.send("Home page");
  res.status(200).json({
    msg: "all good",
  });
});
app.get(
  "/api/v1/chats",
  // (req, res, n) => {
  //   console.log("custom middleware ");
  //   // return res.send("hello");
  //   res.send("hello");
  //   n();
  // },
  (req, res) => {
    // console.log("req.url is :-", req.url);
    res
      .status(200)
      .json([{ msg: "hi" }, { msg: "hello" }, { msg: "what's up" }]);
  }
);

// app.get("/abc", (req, res) => {
//   console.log("Inside /abc and req.url is :-", req.url);
//   res.sendFile(__dirname + "/abc.html");
// });

// ----------------starting the server after the DB connection gets established
const start = async () => {
  try {
    await connectDB(mongo_uri);
    app.listen(port, (err) => {
      if (err) {
        console.log("Error in running the server and the error is :-", err);
        return;
      }
      console.log("Server running on port:-", port);
    });
  } catch (error) {
    console.log("There came an error in start()", error);
  }
};
start();

// ------------------------------Just a new server code to log the error (which we are trying
// ------------------------ to throw intentionally) like:- port already in use

// const express = require("express");
// const app = express();
// const port = 8000;

// // Simulate another application using port 8000
// const net = require("net");
// const server = net.createServer();

// server.listen(port, () => {
//   console.log("Port 8000 is already in use.");
//   // Intentionally introduce an error to prevent app.listen
//   throw new Error("Port in use");
// });

// app.listen(port, () => {
//   console.log("Server running on port:", port);
// });

// process.on("uncaughtException", (err) => {
//   console.log("Error in running the server and the error is:", err);
// });
