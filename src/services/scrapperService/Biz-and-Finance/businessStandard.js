import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import BizAndFinance from "../../../models/bizAndFinance.js";

const businessStandard = {
  name: "businessStandard",
  Model: BizAndFinance,
  url: "https://www.business-standard.com/",
  linkSelector: [".main-title a", ".cardlist a"],
  articleSelectors: {
    titleSelector: [".stryhdtp"],
    dateSelector: [".meta-info"],
    contentSelector: [".storycontent p"],
    articleContentSelector: [".storycontent div"],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: businessStandard,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: businessStandard,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default businessStandard;
