import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import route from "./routes/index.js";
import scrapeAllSitesJob from "./jobs/scrapeAllSites.js";

dotenv.config();
const PORT = process.env.PORT || 4000;

const app = express();
mongoose.connect(process.env.MONGO_DEV_URI).then(() => {
  console.log("Successfully connected to mongo server.");
});

(async () => {
  await scrapeAllSitesJob();
})();
app.use("/", route);

app
  .listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  })
  .on("error", (err) => {
    console.error(`Error running applicatoin: ${err}`);
    process.exit(1);
  });
