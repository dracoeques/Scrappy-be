import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import BizAndFinance from "../../../models/bizAndFinance.js";

const businessInsider = {
  name: "businessInsider",
  Model: BizAndFinance,
  url: [
    "https://www.businessinsider.com/retail",
    "https://www.businessinsider.com/strategy",
    "https://markets.businessinsider.com/",
    "https://www.businessinsider.com/finance",
  ],
  linkSelector: [".tout-title-link", "h2 a", "h3 a"],
  articleSelectors: {
    titleSelector: [".post-headline", ".article-headline"],
    dateSelector: [
      ".byline-timestamp?data-timestamp",
      "time",
      ".byline-timestamp",
    ],
    contentSelector: [".enhanced-subtitle", ".summary-list"],
    articleContentSelector: [
      ".content-lock-content p",
      ".content-lock-content h2",
      ".article-body-text p",
      ".article-body-text h3",
    ],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: businessInsider,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: businessInsider,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default businessInsider;
