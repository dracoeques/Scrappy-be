import clusterScrape from "../../utils/scrapper/cluster-scrape.js";
import { scrapeCategory } from "../../utils/scrapper/scrape-category.js";
import { getCategoryLimits } from "../../utils/utils.js";
import allArtAndFashion from "./Art-and-Fashion/index.js";
import allBizAndFinance from "./Biz-and-Finance/index.js";
import allEntertainment from "./Entertainment/index.js";
import allGaming from "./Gaming/index.js";
import allLaw from "./Law-and-crime/index.js";
import allLifestyleAndHealth from "./Lifestyle-and-health/index.js";
import allScienceAndTech from "./Science-and-Tech/index.js";
import allSport from "./Sports/index.js";
import allWeb3 from "./Web3/index.js";
import allPolitics from "./politics/index.js";

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
  const { start, end } = getCategoryLimits();
  const articleToScrape = allArticles.splice(start, end);

  await scrapeCategory(articleToScrape, import.meta.url);
})();

export default allArticles;
