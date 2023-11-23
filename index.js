const express = require("express");
const app = express();
const ekskulRouter = require("./router/routerEkstra");
const connectDB = require("./config/db");
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(ekskulRouter);

connectDB();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
