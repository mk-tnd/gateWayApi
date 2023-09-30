import axios from "axios";
import express, { response } from "express";

const router = express.Router();

router.all("/:apiName", (req, res) => {
  console.log(req.params.apiName);
  axios
    .get(
      "https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/:restaurantId.json"
    )
    .then((response) => {
      res.send(response.data);
    });
});

export default router;
