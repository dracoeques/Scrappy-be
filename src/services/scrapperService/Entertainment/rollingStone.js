import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Entertainment from "../../../models/entertainment.js";

const rollingStone = {
  name: "rollingStone",
  Model: Entertainment,
  url: "https://www.rollingstone.com/",
  linkSelector: [".c-title__link"],
  articleSelectors: {
    titleSelector: [".article-title"],
    dateSelector: [".c-timestamp", "time"],
    contentSelector: [".article-excerpt"],
    articleContentSelector: [".a-content p", ".a-content h2", ".a-content h3"],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: rollingStone,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: rollingStone,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default rollingStone;
