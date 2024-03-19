import clusterScrape from "../../../utils/scrapper/cluster-scrape.js";
import { scrapeCategory } from "../../../utils/scrapper/scrape-category.js";
import bleacherReport from "./bleacherReport.js";
import cbsSports from "./cbsSports.js";
import espn from "./espn.js";
import foxSports from "./foxSports.js";
import nbcSports from "./nbcSports.js";
import skySport from "./skySport.js";
import theAthletic from "./theAthletic.js";
import yahooSports from "./yahooSports.js";
import sbNation from "./sbNation.js";
import theGuardianSport from "./theGuardianSport.js";
import sportsNet from "./sportsNet.js";
import euroSport from "./euroSport.js";
import reutersSports from "./reutersSports.js";
import aljazeeraSports from "./aljazeeraSports.js";
import marca from "./marca.js";
import nhkSports from "./nhkSports.js";
import apNews from "./apNews.js";
import bbc from "./bbc.js";
import cnn from "./cnn.js";
import theIndependent from "./theIndependent.js";
import theTelegraph from "./theTelegraph.js";
import tmz from "./tmz.js";
import wallStreetJournal from "./wallStreetJournal.js";

const allSport = [
  aljazeeraSports,
  apNews,
  bbc,
  bleacherReport,
  cbsSports,
  cnn,
  espn,
  euroSport,
  foxSports,
  marca,
  nbcSports,
  nhkSports,
  reutersSports,
  sbNation,
  skySport,
  sportsNet,
  theAthletic,
  theGuardianSport,
  theIndependent,
  theTelegraph,
  tmz,
  wallStreetJournal,
  yahooSports,
];

export const getNews = async () => {
  await clusterScrape({ filepath: import.meta.url, articles: allSport });
};

(async () => {
  await scrapeCategory(allSport, import.meta.url);
})();

export default allSport;
