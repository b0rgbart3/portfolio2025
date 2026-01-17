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
   API Routes
   ========================= */
const routes = require("./routes");
app.use(routes);

/* =========================
   React App (ROOT OWNER)
   ========================= */
app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server running on port ${PORT}`);
});
