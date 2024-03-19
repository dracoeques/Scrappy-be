import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Web3 from "../../../models/web3.js";

const coinMarketCap = {
  name: "coinMarketCap",
  Model: Web3,
  url: [
    "https://coinmarketcap.com/headlines/",
    "https://coinmarketcap.com/headlines/news/",
  ],
  linkSelector: [".sc-aef7b723-0 .imWlwI"],
  articleSelectors: {
    titleSelector: [".llGAYu", ".entry-title", ".cECJcb", "h1"],
    dateSelector: [
      ".fCASWb",
      ".gJqtyQ",
      ".cp-entry-meta-left",
      ".elementor-post-info__item--type-date",
      "time?datetime",
      "time",
    ],
    contentSelector: [".hgxoko p", ".cvngAK", ".article-tldr", ".tldr-content"],
    articleContentSelector: [
      ".hgxoko p",
      ".hgxoko h2",
      ".hgxoko h3",
      ".hgxoko h4",
      ".hgxoko h5",
      ".hgxoko h6",
      ".entry-content p",
      ".entry-content h2",
      ".entry-content h3",
      ".entry-content h4",
      ".entry-content h5",
      ".entry-content h6",
      "article p",
      "article h2",
      "article h3",
      "article h4",
      "article h5",
      "article h6",
      ".postbody p",
      ".postbody h2",
      ".postbody h3",
      ".postbody h4",
      ".postbody h5",
      ".postbody h6",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: coinMarketCap,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default coinMarketCap;
