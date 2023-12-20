import clusterScrape from "../../../utils/scrapper/scrape-category.js";
import { checkIsEntryFile, getArgs } from "../../../utils/utils.js";
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

const allArtAndFashion = [
  artNews,
  artsy,
  dazed,
  elle,
  harpersbazaar,
  hyperallergic,
  refinery29,
  theCut,
  vogue,
  wMagazine,
];

export const getNews = async () => {
  await clusterScrape({
    filepath: import.meta.url,
    articles: allArtAndFashion,
  });
};

(async () => {
  if (!checkIsEntryFile(import.meta.url)) return;
  const { maxConcurency, concurencyLevel } = getArgs();
  await clusterScrape({
    filepath: import.meta.url,
    articles: allArtAndFashion,
    checkEntryFile: true,
    maxConcurrency: maxConcurency,
    concurrencyLevel: concurencyLevel,
  });
})();

export default allArtAndFashion;
