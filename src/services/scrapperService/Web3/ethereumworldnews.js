import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Web3 from "../../../models/web3.js";

const ethereumWorldNews = {
  name: "ethereumWorldNews",
  Model: Web3,
  url: "https://en.ethereumworldnews.com/",
  linkSelector: ["h3 a"],
  articleSelectors: {
    titleSelector: [".entry-title"],
    dateSelector: ["time?datetime"],
    contentSelector: [".entry-content p"],
    articleContentSelector: [
      ".entry-content p",
      ".entry-content h2",
      ".entry-content h6",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: ethereumWorldNews,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default ethereumWorldNews;
