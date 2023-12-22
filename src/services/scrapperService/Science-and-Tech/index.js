import clusterScrape from "../../../utils/scrapper/scrape-category.js";
import { checkIsEntryFile, getArgs } from "../../../utils/utils.js";
import arsTechnica from "./arsTechnica.js";
import cnet from "./cnet.js";
import engadget from "./engadget.js";
import gigaom from "./gigaom.js";
import gizmodo from "./gizmodo.js";
import liveScience from "./liveScience.js";
import scientificAmerican from "./scientificAmerican.js";
import techCrunch from "./techCrunch.js";
import theVerge from "./theVerge.js";
import wired from "./wired.js";
import popularScience from "./popularScience.js";
import readWrite from "./readWrite.js";
import scienceDaily from "./scienceDaily.js";
import mitTechnologyReview from "./mitTechnologyReview.js";
import nature from "./nature.js";
import science from "./science.js";
import mashable from "./mashable.js";
import ieeeSpectrum from "./ieeeSpectrum.js";
import gizChina from "./gizChina.js";
import ventureBeat from "./ventureBeat.js";
import voxTech from "./voxTech.js";
import techRadar from "./techRadar.js";
import yahoo from "./yahoo.js";

const allScienceAndTech = [
  arsTechnica,
  cnet,
  engadget,
  gizmodo,
  liveScience,
  popularScience,
  scienceDaily,
  scientificAmerican,
  techCrunch,
  theVerge,
  wired,
  mitTechnologyReview,
  nature,
  science,
  mashable,
  ieeeSpectrum,
  gizChina,
  ventureBeat,
  techRadar,
  gigaom,
  readWrite,
  voxTech,
  yahoo,
];

export const getNews = async () => {
  await clusterScrape({
    filepath: import.meta.url,
    articles: allScienceAndTech,
  });
};

(async () => {
  if (!checkIsEntryFile(import.meta.url)) return;
  const { maxConcurency, concurencyLevel } = getArgs();

  await clusterScrape({
    filepath: import.meta.url,
    articles: allScienceAndTech,
    checkEntryFile: true,
    maxConcurrency: maxConcurency,
    concurrencyLevel: concurencyLevel,
  });
})();

export default allScienceAndTech;
