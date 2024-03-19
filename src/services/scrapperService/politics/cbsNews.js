import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Politics from "../../../models/politics.js";

const cbsNews = {
  name: "cbsNews",
  Model: Politics,
  url: ["https://www.cbsnews.com/politics/", "https://www.cbsnews.com/world/"],
  linkSelector: [".item a"],
  articleSelectors: {
    titleSelector: [".content__title"],
    dateSelector: ["time"],
    contentSelector: [".content__body p"],
    articleContentSelector: [
      ".content__body p",
      ".content__body h2",
      ".content__body h3",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: cbsNews,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default cbsNews;
