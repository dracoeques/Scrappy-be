import { getArticles } from "./utils/puppeteer/get-articles.js";
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
import { checkIsEntryFile } from "./utils/utils.js";

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
  for (let article of allArticles) {
    await getArticles(article, 1);
  }
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (!isEntryFile) return;
  for (let article of allArticles) {
    await getArticles(article, 1);
  }
})();

export default allArticles;
