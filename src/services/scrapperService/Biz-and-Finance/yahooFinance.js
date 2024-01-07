import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import BizAndFinance from "../../../models/bizAndFinance.js";

const yahooFinance = {
  name: "yahooFinance",
  Model: BizAndFinance,
  url: "https://finance.yahoo.com/",
  linkSelector: [".js-content-viewer"],
  articleSelectors: {
    titleSelector: ["[data-test-locator='headline']"],
    dateSelector: ["time"],
    contentSelector: [".caas-subheadline"],
    articleContentSelector: [".caas-body > p"],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: yahooFinance,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: yahooFinance,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default yahooFinance;
