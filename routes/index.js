const path = require("path");
const express = require("express");
const router = require("express").Router();
const apiRoutes = require("./api");
const axios = require("axios");


// 🔹 Serve Flutter static files
// router.use(
//   "/lightburst",
//   express.static(path.join(__dirname, "../public/lightburst"))
// );

// router.get("/lightburst", (req, res) => {
//   console.log("Got to lightburst.");

//   res.sendFile(
//     path.join(__dirname, "../public/lightburst/index.html")
//   );
// });

// router.get("/lightburst/*", (req, res) => {
//   console.log("Got to a lightburst subpage.");

//   res.sendFile(
//     path.join(__dirname, "../public/lightburst/index.html")
//   );
// });


// API Routes 
router.use("/api", apiRoutes);


router.get("/BART_DORITY_resume.pdf", (req, res) => {
  console.log("serving up the static pdf.");
  res.sendFile(path.join(__dirname, "../client/build/BART_DORITY_resume.pdf"));

});
// router.get("*", (req, res) => {
//   console.log("Got to the catch-all block of the router.");

//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });




module.exports = router;
