import express, { Application } from "express";
import router from "./routes/routes";

const app: Application = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

app.get("/", (req, res) => res.send("LINE MAN Wongnai Frontend Assignment"));

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error) {
  console.error(`Error occured: ${(error as Error).message}`);
}
