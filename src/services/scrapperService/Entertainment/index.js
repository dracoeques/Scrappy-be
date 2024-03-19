import clusterScrape from "../../../utils/scrapper/cluster-scrape.js";
import { scrapeCategory } from "../../../utils/scrapper/scrape-category.js";
import apNews from "./apNews.js";
import atlantaBlackstar from "./atlantaBlackstar.js";
import billboard from "./billboard.js";
import cbsNews from "./cbs.js";
import chinaDaily from "./chinaDaily.js";
import cnn from "./cnn.js";
import dailyDot from "./dailydot.js";
import dailyMail from "./dailyMail.js";
import deadline from "./deadline.js";
import eNews from "./eNews.js";
import entertainmentWeekly from "./entertainmentWeekly.js";
import heavy from "./heavy.js";
import indieWire from "./indieWire.js";
import justJared from "./justJared.js";
import koreanHerald from "./koreaHerald.js";
import mtvNews from "./mtvNews.js";
import ndtv from "./ndtv.js";
import people from "./people.js";
import peoplesDaily from "./peoplesDaily.js";
import popSugar from "./popSugar.js";
import rollingStone from "./rollingStone.js";
import scopeBlog from "./scopeBlog.js";
import springwise from "./springWise.js";
import theTelegraph from "./telegraph.js";
import theChosunIlbo from "./theChosunIlbo.js";
import theHollywoodReporter from "./theHollywoodReporter.js";
import timesOfIndia from "./timesOfIndia.js";
import tmz from "./tmz.js";
import usWeekly from "./usWeekly.js";
import variety from "./variety.js";
import vulture from "./vulture.js";
import yonhap from "./yonhapNews.js";

const allEntertainment = [
  apNews,
  atlantaBlackstar,
  billboard,
  cbsNews,
  chinaDaily,
  cnn,
  dailyDot,
  dailyMail,
  deadline,
  eNews,
  entertainmentWeekly,
  heavy,
  indieWire,
  justJared,
  koreanHerald,
  mtvNews,
  ndtv,
  people,
  peoplesDaily,
  popSugar,
  rollingStone,
  scopeBlog,
  springwise,
  theTelegraph,
  theChosunIlbo,
  theHollywoodReporter,
  timesOfIndia,
  tmz,
  usWeekly,
  variety,
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
