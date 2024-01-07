import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import Politics from "../../../models/politics.js";

const gulfNews = {
  name: "gulfNews",
  Model: Politics,
  url: "https://gulfnews.com/",
  linkSelector: [".card-body a"],
  articleSelectors: {
    titleSelector: '[itemprop="headline"]',
    dateSelector: [".time"],
    contentSelector: ".lead",
    articleContentSelector: ".story-block p",
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: gulfNews,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default gulfNews;
