import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Entertainment from "../../../models/entertainment.js";

const atlantaBlackstar = {
  name: "atlantaBlackstar",
  Model: Entertainment,
  url: "https://atlantablackstar.com/",
  linkSelector: [".article-card__title a"],
  articleSelectors: {
    titleSelector: [".entry-title"],
    dateSelector: ["time"],
    contentSelector: [".entry-content p"],
    articleContentSelector: [
      ".entry-content p",
      ".entry-content h2",
      ".entry-content h3",
    ],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: atlantaBlackstar,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: atlantaBlackstar,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default atlantaBlackstar;
