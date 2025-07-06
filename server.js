const express = require("express");
// const path = require("path");
// const PORT = process.env.PORT || 3002;
const app = express();
// const mongoose = require("mongoose");
const routes = require("./routes");
const { createProxyMiddleware } = require('http-proxy-middleware');

// Define middleware here
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(express.json({ limit: '1mb' }));
// app.use(express.urlencoded({ extended: true, limit: '1mb' }));

app.use('/googlebooks', createProxyMiddleware({
  target: 'http://localhost:8001',
  changeOrigin: true,
}));

app.use((req, res, next) => {
  console.log("Incoming request:", req.method, req.url);
  next();
});

// all routes are in here
// app.use((req, res, next) => {
//   console.log("Headers received:", req.headers);
//   const cookieHeader = req.headers['cookie'] || '';
//   if (cookieHeader.length > 4000) {
//     return res.status(431).send("Too many cookies");
//   }
//   next();
// });

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
// }

const PORT = 8000;

// all routes are in here
app.use(routes);

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
