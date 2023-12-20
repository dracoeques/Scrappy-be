import express from "express";
import route from "./routes/index.js";
// import scrapeAllSitesJob from "./jobs/scrapeAllSites.js";
import config from "./config/index.js";
import mongoose from "./utils/mongoose.js";

const app = express();

// (async () => {
//   await scrapeAllSitesJob();
// })();

app.use("/", route);
app.use("/", (req, res, next) => {
  res.status(404).json({
    status: "error",
    message: "page not found",
  });
});

const PORT = config.port;

app
  .listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  })
  .on("error", (err) => {
    console.error(`Error running application: ${err}`);
    process.exit(1);
  });
