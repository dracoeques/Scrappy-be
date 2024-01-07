import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import BizAndFinance from "../../../models/bizAndFinance.js";

const caixinGlobal = {
  name: "caixinGlobal",
  Model: BizAndFinance,
  url: "https://www.caixinglobal.com/",
  linkSelector: ["dd a"],
  articleSelectors: {
    titleSelector: [".cons-title"],
    dateSelector: [".cons-date"],
    contentSelector: [".cons-box p"],
    articleContentSelector: [".cons-box p"],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: caixinGlobal,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: caixinGlobal,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default caixinGlobal;
