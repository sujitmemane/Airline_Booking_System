import express from "express";
import AirplaneRoutes from "./airplane-route.js";
import CityRoutes from "./city-route.js";

const router = express.Router();

router.use("/airplanes", AirplaneRoutes);
router.use("/cities", CityRoutes);

export default router;
