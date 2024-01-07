import clusterScrape from "../../../utils/scrapper/cluster-scrape.js";
import { scrapeCategory } from "../../../utils/scrapper/scrape-category.js";
import billboard from "./billboard.js";
import chinaDaily from "./chinaDaily.js";
import dailyDot from "./dailydot.js";
import dailyMail from "./dailyMail.js";
import deadline from "./deadline.js";
import eNews from "./eNews.js";
import entertainmentWeekly from "./entertainmentWeekly.js";
import justJared from "./justJared.js";
import koreanHerald from "./koreaHerald.js";
import mtvNews from "./mtvNews.js";
import ndtv from "./ndtv.js";
import people from "./people.js";
import peoplesDaily from "./peoplesDaily.js";
import popSugar from "./popSugar.js";
import rollingStone from "./rollingStone.js";
import theChosunIlbo from "./theChosunIlbo.js";
import theHollywoodReporter from "./theHollywoodReporter.js";
import timesOfIndia from "./timesOfIndia.js";
import tmz from "./tmz.js";
import variety from "./variety.js";
import vulture from "./vulture.js";
import yonhap from "./yonhapNews.js";

const allEntertainment = [
  billboard,
  chinaDaily,
  dailyDot,
  dailyMail,
  deadline,
  eNews,
  tmz,
  variety,
  entertainmentWeekly,
  theHollywoodReporter,
  people,
  justJared,
  koreanHerald,
  mtvNews,
  ndtv,
  popSugar,
  peoplesDaily,
  rollingStone,
  theChosunIlbo,
  timesOfIndia,
  vulture,
  yonhap,
];

export const getNews = async () => {
  await clusterScrape({
    filepath: import.meta.url,
    articles: allEntertainment,
  });
};

(async () => {
  await scrapeCategory(allEntertainment, import.meta.url);
})();

export default allEntertainment;
