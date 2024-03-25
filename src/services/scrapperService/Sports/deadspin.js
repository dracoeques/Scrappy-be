import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Entertainment from "../../../models/entertainment.js";

const deadspin = {
  name: "deadspin",
  Model: Entertainment,
  url: "https://deadspin.com/",
  linkSelector: [".sc-1pw4fyi-2 .sc-1out364-0"],
  articleSelectors: {
    titleSelector: ["h1"],
    dateSelector: ["time?datetime"],
    contentSelector: [".sc-r43lxo-1 p"],
    articleContentSelector: [".sc-r43lxo-1 p"],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: deadspin,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: deadspin,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default deadspin;
