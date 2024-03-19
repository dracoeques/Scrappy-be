import clusterScrape from "../../../utils/scrapper/cluster-scrape.js";
import { scrapeCategory } from "../../../utils/scrapper/scrape-category.js";
import alJazeera from "./alJazeera.js";
import allSlides from "./allSlides.js";
import bbc from "./bbc.js";
import cnbc from "./cnbc.js";
import cnn from "./cnn.js";
import foxNews from "./foxNews.js";
import nbcNews from "./nbcNews.js";
import politico from "./politico.js";
import reuters from "./reuters.js";
import theGuardian from "./theGuardian.js";
import theHill from "./theHill.js";
import abcPolitics from "./abcPolitics.js";
import usaTodayPolitics from "./usaTodayPolitics.js";
import washingtonPostPolitics from "./washingtonPostPolitics.js";
import theTelegraph from "./theTelegraph.js";
import chicagoTribune from "./chicagoTribune.js";
import theGlobeAndMail from "./theGlobeAndMail.js";
import southChinaMorningPost from "./southChinaMorningPost.js";
import theJapanTimes from "./theJapanTimes.js";
import theSydneyMorningHerald from "./theSydneyMorningHerald.js";
import xinhuaNewsAgency from "./xinhaNewsAgency.js";
import sputnikNews from "./sputnik.js";
import gulfNews from "./gulfNews.js";
import dailyKos from "./dailyKos.js";
import huffPost from "./huffPost.js";
import losAngelesTimes from "./losAnglesTimes.js";
import motherJones from "./motherJones.js";
import npr from "./npr.js";
import politiFact from "./politiFact.js";
import proPublica from "./proPublica.js";
import reason from "./reason.js";
import slate from "./slate.js";
import talkingPointMemo from "./talkingPointMemo.js";
import theAmericanConservative from "./theAmericanConservative.js";
import theAtlantic from "./theAtlantic.js";
import theFederalist from "./theFederalist.js";
import theNation from "./theNation.js";
import theNewRepublic from "./theNewRepublic.js";
import yahooPolitics from "./yahooPolitics.js";
import amGreatness from "./amgreatness.js";
import apNews from "./apNews.js";
import axios from "./axios.js";
import bloomberg from "./bloomberg.js";
import breitbart from "./breitbart.js";
import cbsNews from "./cbsNews.js";
import nationalReview from "./nationalReview.js";
import nber from "./nber.js";
import nyTimes from "./nyTimes.js";
import pewResearch from "./pewResearch.js";
import theIntercept from "./theIntercept.js";
import theModerateVoice from "./theModerateVoice.js";
import visualCapitalist from "./visualCapitalist.js";
import wallStreetJournal from "./wallStreetJournal.js";
import foreignPolicy from "./foreignPolicy.js";

const allPolitics = [
  abcPolitics,
  alJazeera,
  allSlides,
  amGreatness,
  apNews,
  axios,
  bbc,
  bloomberg,
  breitbart,
  cbsNews,
  chicagoTribune,
  cnbc,
  cnn,
  dailyKos,
  foreignPolicy,
  foxNews,
  gulfNews,
  huffPost,
  losAngelesTimes,
  motherJones,
  nationalReview,
  nbcNews,
  nber,
  npr,
  nyTimes,
  pewResearch,
  politico,
  politiFact,
  proPublica,
  reason,
  reuters,
  slate,
  southChinaMorningPost,
  sputnikNews,
  talkingPointMemo,
  theAmericanConservative,
  theAtlantic,
  theFederalist,
  theGlobeAndMail,
  theGuardian,
  theHill,
  theIntercept,
  theJapanTimes,
  theModerateVoice,
  theNation,
  theNewRepublic,
  theSydneyMorningHerald,
  theTelegraph,
  usaTodayPolitics,
  visualCapitalist,
  wallStreetJournal,
  washingtonPostPolitics,
  xinhuaNewsAgency,
  yahooPolitics,
];

export const getNews = async () => {
  await clusterScrape({ filepath: import.meta.url, articles: allPolitics });
};

(async () => {
  await scrapeCategory(allPolitics, import.meta.url);
})();

export default allPolitics;
