import clusterScrape from "../../../utils/scrapper/scrape-category.js";
import { checkIsEntryFile, getArgs } from "../../../utils/utils.js";
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

const allPolitics = [
  allSlides,
  abcPolitics,
  alJazeera,
  bbc,
  cnbc,
  cnn,
  dailyKos,
  foxNews,
  huffPost,
  losAngelesTimes,
  motherJones,
  nbcNews,
  npr,
  politico,
  politiFact,
  proPublica,
  reason,
  reuters,
  slate,
  talkingPointMemo,
  theAmericanConservative,
  theAtlantic,
  theFederalist,
  theNation,
  theNewRepublic,
  yahooPolitics,
  theGuardian,
  theHill,
  usaTodayPolitics,
  washingtonPostPolitics,
  theTelegraph,
  chicagoTribune,
  theGlobeAndMail,
  southChinaMorningPost,
  theJapanTimes,
  theSydneyMorningHerald,
  xinhuaNewsAgency,
  sputnikNews,
  gulfNews,
];

export const getNews = async () => {
  await clusterScrape({ filepath: import.meta.url, articles: allPolitics });
};

(async () => {
  if (!checkIsEntryFile(import.meta.url)) return;
  const { maxConcurency, concurencyLevel } = getArgs();
  await clusterScrape({
    filepath: import.meta.url,
    articles: allPolitics,
    checkEntryFile: true,
    maxConcurrency: maxConcurency,
    concurrencyLevel: concurencyLevel,
  });
})();

export default allPolitics;
