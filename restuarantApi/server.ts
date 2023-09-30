import express from "express";
const app = express();
const port = 3001;

app.use(express.json());
app.get("/restuarant", (req, res, next) => {
  res.send("");
});
