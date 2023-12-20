import { exit } from "process";
import clusterScrape from "./utils/scrapper/scrape-category.js";
import allArtAndFashion from "./services/scrapperService/Art-and-Fashion/index.js";
import allBizAndFinance from "./services/scrapperService/Biz-and-Finance/index.js";
import allEntertainment from "./services/scrapperService/Entertainment/index.js";
import allGaming from "./services/scrapperService/Gaming/index.js";
import allLaw from "./services/scrapperService/Law-and-crime/index.js";
import allLifestyleAndHealth from "./services/scrapperService/Lifestyle-and-health/index.js";
import allScienceAndTech from "./services/scrapperService/Science-and-Tech/index.js";
import allSport from "./services/scrapperService/Sports/index.js";
import allWeb3 from "./services/scrapperService/Web3/index.js";
import allPolitics from "./services/scrapperService/politics/index.js";
import { checkIsEntryFile, getArgs } from "./utils/utils.js";

const allArticles = [
  ...allArtAndFashion,
  ...allBizAndFinance,
  ...allEntertainment,
  ...allGaming,
  ...allLaw,
  ...allLifestyleAndHealth,
  ...allPolitics,
  ...allScienceAndTech,
  ...allSport,
  ...allWeb3,
];
export const getNews = async () => {
  await clusterScrape({ filepath: import.meta.url, articles: allArticles });
};

(async () => {
  if (!checkIsEntryFile(import.meta.url)) return;
  const { maxConcurency, concurencyLevel } = getArgs();
  await clusterScrape({
    filepath: import.meta.url,
    articles: allArticles,
    checkEntryFile: false,
    maxConcurrency: maxConcurency,
    concurrencyLevel: concurencyLevel,
  });
  // exit(0);
})();

export default allArticles;
