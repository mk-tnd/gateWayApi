import express, { Application } from "express";
import ROUTES from "./routes/routes";
import setupProxies from "./middleware/proxy";

const app: Application = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

setupProxies(app, ROUTES);

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error) {
  console.error(`Error occured: ${(error as Error).message}`);
}
