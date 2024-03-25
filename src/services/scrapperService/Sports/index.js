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
import atpTour from "./atpTour.js";
import autoSport from "./autoSport.js";
import bowl from "./bowl.js";
import cricketWorld from "./cricketWorld.js";
import cyclingNews from "./cyclingNews.js";
import formula1 from "./formula1.js";
import golfDigest from "./golfDigest.js";
import insideLacrosse from "./insideLacrosse.js";
import nhl from "./nhl.js";
import runnersWorld from "./runnersWorld.js";
import sailingWorld from "./sailingWorld.js";
import snowBoarder from "./snowboarder.js";
import surferToday from "./surferToday.js";
import swimSwam from "./swimSwam.js";
import tennis from "./tennis.js";
import thrasherMagazine from "./thrasherMagazine.js";
import trackAndFieldNews from "./trackAndFieldNews.js";
import deadspin from "./deadspin.js";
import theRinger from "./theRinger.js";

const allSport = [
  aljazeeraSports,
  apNews,
  atpTour,
  autoSport,
  bbc,
  bleacherReport,
  bowl,
  cbsSports,
  cnn,
  cricketWorld,
  cyclingNews,
  deadspin,
  espn,
  euroSport,
  formula1,
  foxSports,
  golfDigest,
  insideLacrosse,
  marca,
  nbcSports,
  nhkSports,
  nhl,
  reutersSports,
  runnersWorld,
  sailingWorld,
  sbNation,
  skySport,
  snowBoarder,
  sportsNet,
  surferToday,
  swimSwam,
  tennis,
  theAthletic,
  theGuardianSport,
  theIndependent,
  theRinger,
  theTelegraph,
  thrasherMagazine,
  tmz,
  trackAndFieldNews,
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
