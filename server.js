const express = require("express");
const path = require("path");
const app = express();

const PORT = 8000;

app.use(express.json());

/* =========================
   Flutter Web (SCOPED)
   ========================= */
app.use(
  "/lightburst",
  express.static(path.join(__dirname, "public/lightburst"))
);

app.get("/lightburst/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/lightburst/index.html"));
});

/* =========================
   React Static Files FIRST
   ========================= */
app.use(express.static(path.join(__dirname, "client/build")));

/* =========================
   API / Backend Routes
   ========================= */
const routes = require("./routes");
app.use(routes);

/* =========================
   React Catch-All (ONLY ONE)
   ========================= */
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server running on port ${PORT}`);
});
