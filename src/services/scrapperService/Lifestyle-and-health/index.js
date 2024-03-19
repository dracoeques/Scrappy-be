import clusterScrape from "../../../utils/scrapper/cluster-scrape.js";
import { scrapeCategory } from "../../../utils/scrapper/scrape-category.js";
import apNews from "./apNews.js";
import bbc from "./bbc.js";
import businessInsider from "./businessInsider.js";
import cnn from "./cnn.js";
import everydayHealth from "./everydayHealth.js";
import gothamist from "./gothamist.js";
import health from "./health.js";
import healthline from "./healthline.js";
import hollywoodReporter from "./hollywoodReporter.js";
import mensHealth from "./mensHealth.js";
import mindbodygreen from "./mindbodygreen.js";
import nbcNews from "./nbcNews.js";
import prevention from "./prevention.js";
import refinary29 from "./refinery29.js";
import shape from "./shape.js";
import telegraph from "./telegraph.js";
import theGuardian from "./theGuardian.js";
import theIndependent from "./theIndependent.js";
import verywellHealth from "./verywellHealth.js";
import wallStreetJournal from "./wallStreetJournal.js";
import webMd from "./webMd.js";
import womensHealth from "./womensHealth.js";

const allLifestyleAndHealth = [
  apNews,
  bbc,
  businessInsider,
  cnn,
  everydayHealth,
  gothamist,
  health,
  healthline,
  hollywoodReporter,
  mensHealth,
  mindbodygreen,
  nbcNews,
  prevention,
  refinary29,
  shape,
  telegraph,
  theGuardian,
  theIndependent,
  verywellHealth,
  wallStreetJournal,
  webMd,
  womensHealth,
];

export const getNews = async () => {
  await clusterScrape({
    filepath: import.meta.url,
    articles: allLifestyleAndHealth,
  });
};

(async () => {
  await scrapeCategory(allLifestyleAndHealth, import.meta.url);
})();

export default allLifestyleAndHealth;
