import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import Web3 from "../../../models/web3.js";

const cryptoInsider = {
  name: "cryptoInsider",
  Model: Web3,
  url: "https://www.businessinsider.in/cryptocurrency",
  linkSelector: ["[rel='noreferrer']"],
  articleSelectors: {
    titleSelector: ["[itemprop='headline']"],
    dateSelector: [".Date"],
    contentSelector: [".summary-list"],
    articleContentSelector: [
      ".article_content p",
      ".article_content h2",
      ".article_content h6",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: cryptoInsider,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default cryptoInsider;
