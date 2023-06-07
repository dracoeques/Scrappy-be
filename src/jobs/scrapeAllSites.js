import agenda from "./index.js";
import { getNews } from "../services/scrapperService/index.js";

agenda.define("scrape-all-sites", async (job) => {
  console.log("job scrape-all-sites started working");
  await getNews();
});

export default async () => {
  await agenda.start();

  await agenda.every("1 day", "scrape-all-sites");
};
