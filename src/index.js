import express from "express";
import { Logger, ServerConfig } from "./config/index.js";
import db from "./models/index.js";

import apiRoutes from "../src/routes/index.js";

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
  Logger.info("Successfully Started ", "root", {});
  console.log(`Successfully started - ${ServerConfig.PORT}`);
  // const pune = await db.City.findByPk(3);

  // const newPuneAirport = await pune.createAirport({
  //   name: "Sujit Memane Airport",
  //   code: "SUJ",
  // });

  // // const airportsInPune = await pune.getAirports();
  // // console.log(airportsInPune);
  // // const sujitAiport = await db.Airport.findByPk(2);
  // // console.log(sujitAiport);
  // // await pune.removeAirport(sujitAiport);
});
