import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import Web3 from "../../../models/web3.js";

const cryptoGlobe = {
  name: "cryptoGlobe",
  Model: Web3,
  url: "https://www.cryptoglobe.com/",
  linkSelector: ["h3 .u-link-v5"],
  articleSelectors: {
    titleSelector: [".u-heading-v3__title"],
    dateSelector: [".d-block ul li:first-child"],
    contentSelector: [".article-body p"],
    articleContentSelector: [
      ".article-body p",
      ".article-body h2",
      ".article-body h6",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: cryptoGlobe,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default cryptoGlobe;
