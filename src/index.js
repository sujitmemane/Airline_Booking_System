import express from "express";
import { Logger, ServerConfig } from "./config/index.js";

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
});
