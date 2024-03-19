import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import BizAndFinance from "../../../models/bizAndFinance.js";

const marketRealist = {
  name: "marketRealist",
  Model: BizAndFinance,
  url: ["https://marketrealist.com/"],
  linkSelector: ["[data-articletype] a"],
  articleSelectors: {
    titleSelector: [".content-title"],
    dateSelector: [".article-meta-details"],
    contentSelector: ["#allQuickLinks"],
    articleContentSelector: [
      ".article-content_ga p",
      ".article-content_ga table",
      ".article-content_ga h1",
      ".article-content_ga h2",
      ".article-content_ga h3",
      ".article-content_ga h4",
      ".article-content_ga h5",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: marketRealist,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default marketRealist;
