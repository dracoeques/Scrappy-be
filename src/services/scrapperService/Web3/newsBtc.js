import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import Web3 from "../../../models/web3.js";

const newsBtc = {
  name: "newsBtc",
  Model: Web3,
  url: "https://www.newsbtc.com/",
  linkSelector: [".jeg_post_title a"],
  articleSelectors: {
    titleSelector: [".jeg_post_title"],
    dateSelector: [".jeg_meta_date"],
    contentSelector: [".content-inner p"],
    articleContentSelector: [
      ".content-inner p",
      ".content-inner h2",
      ".content-inner h6",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: newsBtc,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default newsBtc;
