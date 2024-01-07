import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Entertainment from "../../../models/entertainment.js";

const dailyDot = {
  name: "dailyDot",
  Model: Entertainment,
  url: "https://www.dailydot.com/",
  linkSelector: [".featured-article a", ".tiled-article > a"],
  articleSelectors: {
    titleSelector: [".article-head"],
    dateSelector: [".date-stamp"],
    contentSelector: [".article-sub-head"],
    articleContentSelector: [
      ".article-content-wrapper p",
      ".article-content-wrapper h2",
      ".article-content-wrapper h3",
    ],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: dailyDot,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: dailyDot,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default dailyDot;
