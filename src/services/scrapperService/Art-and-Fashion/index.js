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
  await scrapeCategory(allArtAndFashion, import.meta.url);
})();

export default allArtAndFashion;
