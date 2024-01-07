import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import Web3 from "../../../models/web3.js";

const cryptoNinjas = {
  name: "cryptoNinjas",
  Model: Web3,
  url: "https://www.cryptoninjas.net/",
  linkSelector: [
    ".jeg_postblock_31 .jeg_post_title a",
    ".eg_tabpost_content a",
  ],
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
      article: cryptoNinjas,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default cryptoNinjas;
