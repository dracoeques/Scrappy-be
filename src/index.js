import express from "express";
import mongoose from "mongoose";
import route from "./routes/index.js";
import scrapeAllSitesJob from "./jobs/scrapeAllSites.js";
import config from "./config/index.js";

const app = express();
mongoose.connect(config.db).then(() => {
  console.log("Successfully connected to mongo server.");
});

(async () => {
  await scrapeAllSitesJob();
})();
app.use("/", route);

const PORT = config.port;

app
  .listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  })
  .on("error", (err) => {
    console.error(`Error running applicatoin: ${err}`);
    process.exit(1);
  });
