import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import BizAndFinance from "../../../models/bizAndFinance.js";

const nyTimes = {
  name: "nyTimes",
  Model: BizAndFinance,
  url: [
    "https://www.nytimes.com/section/business",
    "https://www.nytimes.com/section/business/economy",
  ],
  linkSelector: ["h3 a", ".css-1u3p7j1", ".css-8hzhxf"],
  articleSelectors: {
    titleSelector: ["[data-testid='headline']"],
    dateSelector: ["time", ".date"],
    contentSelector: ["#article-summary"],
    articleContentSelector: ["#story p", "#story h2", "#story h3"],
  },
  articlesWaitUntil: "networkidle2",
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: nyTimes,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default nyTimes;
