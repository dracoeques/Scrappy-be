import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import Web3 from "../../../models/web3.js";

const bitcoinist = {
  name: "bitcoinist",
  Model: Web3,
  url: "https://bitcoinist.com/",
  linkSelector: [".jeg_thumb a"],
  articleSelectors: {
    titleSelector: [".jeg_post_title"],
    dateSelector: [".jeg_meta_date"],
    contentSelector: [".jeg_post_subtitle"],
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
      article: bitcoinist,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default bitcoinist;
