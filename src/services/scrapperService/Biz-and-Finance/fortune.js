import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import BizAndFinance from "../../../models/bizAndFinance.js";

const fortune = {
  name: "fortune",
  Model: BizAndFinance,
  url: "https://fortune.com/",
  linkSelector: [".sc-fmPOXC a"],
  articleSelectors: {
    titleSelector: [".sc-fxTzYC h1"],
    dateSelector: [".sc-uokDu", "[datetime]", "time"],
    contentSelector: [".paywall p"],
    articleContentSelector: [
      ".paywall p",
      ".paywall h1",
      ".paywall h2",
      ".paywall h3",
      ".paywall h4",
      ".paywall h5",
      ".paywall h6",
      ".paywall ul",
    ],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: fortune,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: fortune,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default fortune;
