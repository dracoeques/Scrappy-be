import clusterScrape from "../../../utils/scrapper/scrape-category.js";
import { checkIsEntryFile, getArgs } from "../../../utils/utils.js";
import everydayHealth from "./everydayHealth.js";
import health from "./health.js";
import healthline from "./healthline.js";
import mensHealth from "./mensHealth.js";
import mindbodygreen from "./mindbodygreen.js";
import prevention from "./prevention.js";
import shape from "./shape.js";
import verywellHealth from "./verywellHealth.js";
import webMd from "./webMd.js";
import womensHealth from "./womensHealth.js";

const allLifestyleAndHealth = [
  everydayHealth,
  health,
  healthline,
  mensHealth,
  mindbodygreen,
  prevention,
  shape,
  verywellHealth,
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
  if (!checkIsEntryFile(import.meta.url)) return;
  const { maxConcurency, concurencyLevel } = getArgs();
  await clusterScrape({
    filepath: import.meta.url,
    articles: allLifestyleAndHealth,
    checkEntryFile: true,
    maxConcurrency: maxConcurency,
    concurrencyLevel: concurencyLevel,
  });
})();

export default allLifestyleAndHealth;
