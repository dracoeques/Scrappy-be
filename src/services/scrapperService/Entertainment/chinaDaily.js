import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Entertainment from "../../../models/entertainment.js";

const chinaDaily = {
  name: "chinaDaily",
  Model: Entertainment,
  url: "https://www.chinadaily.com.cn/",
  linkSelector: [".fcon a", ".Txt a", ".Txt2 a", ".txt2 a", ".twBox a"],
  articleSelectors: {
    titleSelector: [".ce_art h1", "h1"],
    dateSelector: [".info_l", ".data"],
    contentSelector: ["#Content p"],
    articleContentSelector: ["#Content p", "#Content h2", "#Content h3"],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: chinaDaily,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: chinaDaily,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default chinaDaily;
