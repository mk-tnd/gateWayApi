import express, { Express, Request, Response } from "express";
import axios, { AxiosResponse } from 'axios';
import Restaurants from "./models/Restaurants";

const app: Express = express();
const port: number = 3002;

app.use(express.json());

app.get("/api/v1/restaurants/:restaurantId.json", async (req: Request, res: Response) => {
  const response: AxiosResponse<Restaurants> = await axios.get(`https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/${req.params.restaurantId}.json`)
  res.send(response.data);
});

app.listen(port, ()=> console.log(`Application is running on port ${port}`))
