import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Web3 from "../../../models/web3.js";

const bankless = {
  name: "bankless",
  Model: Web3,
  url: "https://www.bankless.com/",
  linkSelector: [
    ".latestArticle a",
    ".content .learnMore",
    ".standardArticle a",
  ],
  articleSelectors: {
    titleSelector: ["h1"],
    dateSelector: [".meta span:nth-child(2)"],
    contentSelector: ["div.desc"],
    articleContentSelector: [".contents p", ".contents h2", ".contents h6"],
  },
  waitUntil: ["h1", ".meta span:nth-child(2)"],
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: bankless,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default bankless;
