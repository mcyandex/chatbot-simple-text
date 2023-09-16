const express = require("express");
const app = express();
import config from "./config";
import * as dotenv from "dotenv";
dotenv.config();

async function startServer() {
  const app = express();

  await require("./loaders").default({ expressApp: app });

  app
    .listen(config.port, () => {
      console.log(`
    ----------------------------------
    We are alive on port: ${config.port} ™
    ----------------------------------
  `);
    })
    .on("error", (err) => {
      console.log(err);
      process.exit(1);
    });
}

startServer();
