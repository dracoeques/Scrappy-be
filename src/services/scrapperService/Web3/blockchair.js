import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Web3 from "../../../models/web3.js";

const blockchair = {
  name: "blockchair",
  Model: Web3,
  url: "https://blockchair.com/news",
  linkSelector: [".news-page__items__news_item"],
  articleSelectors: {
    titleSelector: [".tdb-title-text"],
    dateSelector: ["time?datetime"],
    contentSelector: [".td_block_wrap .td-fix-index p"],
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
      article: blockchair,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default blockchair;
