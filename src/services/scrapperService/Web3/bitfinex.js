import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Web3 from "../../../models/web3.js";

const bitfinex = {
  name: "bitfinex",
  Model: Web3,
  url: "https://blog.bitfinex.com/",
  linkSelector: ["h4 a", "h5 a"],
  articleSelectors: {
    titleSelector: [".entry_title"],
    dateSelector: ["meta[property='article:modified_time']?content"],
    contentSelector: [".post_text_inner p strong"],
    articleContentSelector: [
      ".post_text_inner p",
      ".post_text_inner h2",
      ".post_text_inner h6",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: bitfinex,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default bitfinex;
