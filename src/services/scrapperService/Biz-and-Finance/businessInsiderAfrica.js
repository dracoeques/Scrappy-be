import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import BizAndFinance from "../../../models/bizAndFinance.js";

const businessInsiderAfrica = {
  name: "businessInsiderAfrica",
  Model: BizAndFinance,
  url: ["https://africa.businessinsidercom/?r=US&IR=Tt"],
  linkSelector: [
    // ".tout-title-link",
    ".gradient-overlay a",
  ],
  articleSelectors: {
    titleSelector: [".post-headline", ".article-headline"],
    dateSelector: ["[data-e2e-name='byline-timestamp']", "time"],
    contentSelector: [".enhanced-subtitle"],
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
    article: businessInsiderAfrica,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: businessInsiderAfrica,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default businessInsiderAfrica;
