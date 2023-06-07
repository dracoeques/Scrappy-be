import { checkIsEntryFile } from "../../../utils/utils.js";

import { getArticles } from "../../../utils/puppeteer/get-articles.js";
import bbcSport from "./bbcSport.js";
import bleacherReport from "./bleacherReport.js";
import cbsSports from "./cbsSports.js";
import espn from "./espn.js";
import foxSports from "./foxSports.js";
import nbcSports from "./nbcSports.js";
import skySport from "./skySport.js";
import theAthletic from "./theAthletic.js";
import yahooSports from "./yahooSports.js";
import sbNation from "./sbNation.js";

const allSport = [
  bbcSport,
  bleacherReport,
  cbsSports,
  espn,
  foxSports,
  nbcSports,
  sbNation,
  skySport,
  theAthletic,
  yahooSports,
];

export const getNews = async () => {
  for (let sport of allSport) {
    await getArticles(sport, 2);
  }
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (!isEntryFile) return;
  for (let sport of allSport) {
    await getArticles(sport, 2);
  }
})();

export default allSport;
