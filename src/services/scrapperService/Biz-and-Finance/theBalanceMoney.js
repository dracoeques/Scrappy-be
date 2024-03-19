import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import BizAndFinance from "../../../models/bizAndFinance.js";

const theBalanceMoney = {
  name: "theBalanceMoney",
  Model: BizAndFinance,
  url: ["https://www.thebalancemoney.com/"],
  linkSelector: [
    ".card--featured",
    ".card--square-image-left",
    ".card--image-top",
    ".card--image-lefts",
  ],
  articleSelectors: {
    titleSelector: [".article-heading"],
    dateSelector: [".mntl-attribution__item-date"],
    contentSelector: [".article-subheading"],
    articleContentSelector: [
      ".article-content p",
      ".article-content h1",
      ".article-content h2",
      ".article-content h3",
      ".article-content h4",
      ".article-content h5",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: theBalanceMoney,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default theBalanceMoney;
