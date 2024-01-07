import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Web3 from "../../../models/web3.js";

const braveNewCoin = {
  name: "braveNewCoin",
  Model: Web3,
  url: "https://bravenewcoin.com/",
  linkSelector: [".media-body a", ".analysis-title"],
  articleSelectors: {
    titleSelector: [".content-main h1"],
    dateSelector: [".article-info"],
    contentSelector: [".e-content p"],
    articleContentSelector: [".e-content p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: braveNewCoin,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default braveNewCoin;
