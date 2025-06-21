import express from "express";
import { CityController } from "../../controllers/index.js";
import { ValidateMiddleware } from "../../middlewares/index.js";
import { CityValidator } from "../../validators/index.js";

const router = express.Router();

router.post(
  "/",
  ValidateMiddleware(CityValidator.createCitySchema),
  CityController.createCity
);

export default router;
