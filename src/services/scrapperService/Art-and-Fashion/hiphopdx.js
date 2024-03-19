import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ArtAndFashion from "../../../models/artAndFashion.js";

const hiphopdx = {
  name: "hiphopdx",
  Model: ArtAndFashion,
  url: ["https://hiphopdx.com/"],
  linkSelector: ["a[data-section='articles']", ".list a", ".post"],
  articleSelectors: {
    titleSelector: [".headline__title", "h1"],
    dateSelector: [".date"],
    contentSelector: [".article-body P"],
    articleContentSelector: [
      ".article-body p",
      ".article-body h2",
      ".article-body h3",
      ".article-body h4",
      ".article-body h5",
      ".article-body h6",
      ".article-body ul",
    ],
  },
  selectorWaitTime: 4000,
};

export const getNews = async () => {
  const res = await singleScrape({
    article: hiphopdx,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: hiphopdx,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default hiphopdx;
