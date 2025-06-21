import express from "express";
import AirplaneRoutes from "./airplane-route.js";

const router = express.Router();

router.use("/airplanes", AirplaneRoutes);

export default router;
