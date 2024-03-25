import clusterScrape from "../../../utils/scrapper/cluster-scrape.js";
import { scrapeCategory } from "../../../utils/scrapper/scrape-category.js";
import vogue from "./vogue.js";
import artNews from "./artNews.js";
import artsy from "./artsy.js";
import dazed from "./dazed.js";
import elle from "./elle.js";
import harpersbazaar from "./harpersbazaar.js";
import hyperallergic from "./hyperallergic.js";
import refinery29 from "./refinery29.js";
import theCut from "./theCut.js";
import wMagazine from "./wMagazine.js";
import allMusic from "./allMusic.js";
import artForum from "./artForum.js";
import bbc from "./bbc.js";
import cnn from "./cnn.js";
import complex from "./complex.js";
import consequence from "./consequence.js";
import earMilk from "./earMilk.js";
import fashionBeans from "./fashionBeans.js";
import fashionMagazine from "./fashionMagazine.js";
import floodMagazine from "./floodMagazine.js";
import frieze from "./frieze.js";
import genius from "./genius.js";
import gorillaVsBear from "./gorillaVsBear.js";
import gq from "./gq.js";
import hiphopdx from "./hiphopdx.js";
import hypeBeast from "./hypeBeast.js";
import kerrang from "./kerrang.js";
import loudAndQuiet from "./loudAndQuiet.js";
import louderThanWar from "./louderThanWar.js";
import loudWire from "./loudWire.js";
import metalInjection from "./metalInjection.js";
import metalSucks from "./metalSucks.js";
import nme from "./nme.js";
import pitchFork from "./pitchFork.js";
import popMatters from "./popMatters.js";
import popSugar from "./popSugar.js";
import spin from "./spin.js";
import stereogum from "./stereogum.js";
import styleCraze from "./styleCraze.js";
import theCurvyFashionista from "./theCurvyFashionista.js";
import theFader from "./theFader.js";
import theFashionSpot from "./theFashionSpot.js";
import theGuardian from "./theGuardian.js";
import theIndependent from "./theIndependent.js";
import theLineOfBestFit from "./theLineOfBestFit.js";
import tinyMixTapes from "./tinyMixTapes.js";
import vice from "./vice.js";
import wallStreetJournal from "./wallStreetJournal.js";
import whiteHotMagazine from "./whiteHotMagazine.js";
import whoWhatWear from "./whoWhatWear.js";
import wired from "./wired.js";
import xxlmag from "./xxlmag.js";
import theArtNewspaper from "./theArtNewspaper.js";
import bussinessOfFashion from "./bussinessOfFashion.js";

const allArtAndFashion = [
  allMusic,
  artForum,
  artNews,
  artsy,
  bbc,
  bussinessOfFashion,
  cnn,
  complex,
  consequence,
  dazed,
  earMilk,
  elle,
  fashionBeans,
  fashionMagazine,
  floodMagazine,
  frieze,
  genius,
  gorillaVsBear,
  gq,
  harpersbazaar,
  hiphopdx,
  hypeBeast,
  hyperallergic,
  kerrang,
  loudAndQuiet,
  louderThanWar,
  loudWire,
  metalInjection,
  metalSucks,
  nme,
  pitchFork,
  popMatters,
  popSugar,
  refinery29,
  spin,
  stereogum,
  styleCraze,
  theArtNewspaper,
  theCurvyFashionista,
  theCut,
  theFader,
  theFashionSpot,
  theGuardian,
  theIndependent,
  theLineOfBestFit,
  tinyMixTapes,
  vice,
  vogue,
  wallStreetJournal,
  whiteHotMagazine,
  whoWhatWear,
  wired,
  wMagazine,
  xxlmag,
];

export const getNews = async () => {
  await clusterScrape({
    filepath: import.meta.url,
    articles: allArtAndFashion,
  });
};

(async () => {
  await scrapeCategory(allArtAndFashion, import.meta.url);
})();

export default allArtAndFashion;
