import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Web3 from "../../../models/web3.js";

const zycrypto = {
  name: "zycrypto",
  Model: Web3,
  url: "https://zycrypto.com/",
  linkSelector: ["a.td-image-wrap"],
  articleSelectors: {
    titleSelector: ["h1.entry-title"],
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
      article: zycrypto,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default zycrypto;
