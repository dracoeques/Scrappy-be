import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Politics from "../../../models/politics.js";

const foxNews = {
  name: "foxNews",
  Model: Politics,
  url: "https://www.foxnews.com/",
  linkSelector: [".title > a"],
  articleSelectors: {
    titleSelector: ".headline",
    dateSelector: "time",
    contentSelector: ".sub-headline",
    articleContentSelector: ".article-body > p",
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: foxNews,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default foxNews;
