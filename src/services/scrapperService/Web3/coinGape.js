import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Web3 from "../../../models/web3.js";

const coinGape = {
  name: "coinGape",
  Model: Web3,
  url: "https://coingape.com/",
  linkSelector: [".Newstitle a", ".ebluebox a"],
  articleSelectors: {
    titleSelector: [".entry-title", "h1"],
    dateSelector: [".publishby"],
    contentSelector: [".postsummary"],
    articleContentSelector: [
      ".c-content p",
      ".c-content h2",
      ".c-content h3",
      ".c-content h4",
      ".c-content h5",
      ".c-content h6",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: coinGape,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default coinGape;
