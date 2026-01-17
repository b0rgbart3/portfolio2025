const express = require("express");
const path = require("path");
const app = express();

const PORT = 8000;

app.use(express.json());

// 🔥 Serve public folder FIRST
app.use(express.static(path.join(__dirname, "public")));

// 🔥 Flutter entry point
app.get("/lightburst", (req, res) => {
  res.sendFile(path.join(__dirname, "public/lightburst/index.html"));
});

// 🔥 Flutter deep links
app.get("/lightburst/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/lightburst/index.html"));
});

// API routes AFTER static
const routes = require("./routes");
app.use(routes);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
