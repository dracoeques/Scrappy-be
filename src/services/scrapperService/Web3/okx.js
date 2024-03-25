import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Web3 from "../../../models/web3.js";

const okx = {
  name: "okx",
  Model: Web3,
  url: "https://www.okx.com/learn",
  linkSelector: [".index_layout__ohE7t"],
  articleSelectors: {
    titleSelector: [".index_articleTitleText__C2mRy"],
    dateSelector: [".index_publishTime__mQ6lE"],
    contentSelector: [".index_articleMainContent__syCTp p"],
    articleContentSelector: [
      ".index_articleMainContent__syCTp p",
      ".index_articleMainContent__syCTp h2",
      ".index_articleMainContent__syCTp h6",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: okx,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default okx;
