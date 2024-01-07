import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import Web3 from "../../../models/web3.js";

const ambCrypto = {
  name: "ambCrypto",
  Model: Web3,
  url: "https://ambcrypto.com/",
  linkSelector: [
    ".featured-post",
    ".trending-post > a",
    ".latest-post-content > a",
    ".home-post-content > a",
    ".feat2-post-content > a",
  ],
  articleSelectors: {
    titleSelector: [".post-title"],
    dateSelector: ["time"],
    contentSelector: [".single-post-main-middle > ul"],
    articleContentSelector: [
      ".single-post-main-middle > p",
      ".single-post-main-middle > h2",
      ".single-post-main-middle > h6",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: ambCrypto,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default ambCrypto;
