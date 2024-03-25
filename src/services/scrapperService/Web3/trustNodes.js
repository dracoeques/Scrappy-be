import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Web3 from "../../../models/web3.js";

const trustNodes = {
  name: "trustNodes",
  Model: Web3,
  url: "https://www.trustnodes.com/",
  linkSelector: [".container a"],
  articleSelectors: {
    titleSelector: ["h1"],
    dateSelector: [".inline-block .inline-block"],
    contentSelector: [".break-words p"],
    articleContentSelector: [
      ".break-words p",
      ".break-words h2",
      ".break-words h6",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: trustNodes,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default trustNodes;
