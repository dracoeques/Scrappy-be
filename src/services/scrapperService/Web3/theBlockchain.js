import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Web3 from "../../../models/web3.js";

const theBlockchain = {
  name: "theBlockchain",
  Model: Web3,
  url: "https://the-blockchain.com/",
  linkSelector: [".entry-title a"],
  articleSelectors: {
    titleSelector: [".entry-title"],
    dateSelector: ["time?datetime"],
    contentSelector: [".td-post-content p"],
    articleContentSelector: [
      ".td-post-content p",
      ".td-post-content h2",
      ".td-post-content h6",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: theBlockchain,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default theBlockchain;
