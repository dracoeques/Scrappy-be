import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Web3 from "../../../models/web3.js";

const cryptonews = {
  name: "cryptonews",
  Model: Web3,
  url: "https://cryptonews.net/",
  linkSelector: ["a.title"],
  articleSelectors: {
    titleSelector: [".article_title"],
    dateSelector: [".datetime"],
    contentSelector: [".cn-content p"],
    articleContentSelector: [
      ".cn-content p",
      ".cn-content h2",
      ".cn-content h6",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: cryptonews,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default cryptonews;
