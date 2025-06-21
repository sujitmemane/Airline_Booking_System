import express from "express";
import { AirplaneControllers } from "../../controllers/index.js";
import { ValidateMiddleware } from "../../middlewares/index.js";
import { AirplaneValidator } from "../../validators/index.js";

const router = express.Router();

router.post(
  "/",
  ValidateMiddleware(AirplaneValidator.createAirplaneSchema),
  AirplaneControllers.createAirplane
);

router.get("/", AirplaneControllers.getAirplanes);
router.get("/:id", AirplaneControllers.getAirplane);
router.delete("/:id", AirplaneControllers.destroyAirplane);

export default router;
