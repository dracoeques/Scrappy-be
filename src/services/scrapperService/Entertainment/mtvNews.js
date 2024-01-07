import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Entertainment from "../../../models/entertainment.js";

const mtvNews = {
  name: "mtvNews",
  Model: Entertainment,
  url: "https://www.mtv.com/news",
  linkSelector: [".article a"],
  articleSelectors: {
    titleSelector: [".headline"],
    dateSelector: [".published-date-time"],
    contentSelector: [".sub-headline"],
    articleContentSelector: [".content-container p"],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: mtvNews,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: mtvNews,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default mtvNews;
