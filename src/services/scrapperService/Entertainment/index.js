import clusterScrape from "../../../utils/scrapper/scrape-category.js";
import { checkIsEntryFile, getArgs } from "../../../utils/utils.js";
import deadline from "./deadline.js";
import eNews from "./eNews.js";
import entertainmentWeekly from "./entertainmentWeekly.js";
import justJared from "./justJared.js";
import people from "./people.js";
import popSugar from "./popSugar.js";
import theHollywoodReporter from "./theHollywoodReporter.js";
import tmz from "./tmz.js";
import variety from "./variety.js";

const allEntertainment = [
  deadline,
  eNews,
  tmz,
  variety,
  entertainmentWeekly,
  theHollywoodReporter,
  people,
  justJared,
  popSugar,
];

export const getNews = async () => {
  await clusterScrape({
    filepath: import.meta.url,
    articles: allEntertainment,
  });
};

(async () => {
  if (!checkIsEntryFile(import.meta.url)) return;
  const { maxConcurency, concurencyLevel } = getArgs();

  await clusterScrape({
    filepath: import.meta.url,
    articles: allEntertainment,
    checkEntryFile: true,
    maxConcurrency: maxConcurency,
    concurrencyLevel: concurencyLevel,
  });
})();

export default allEntertainment;
