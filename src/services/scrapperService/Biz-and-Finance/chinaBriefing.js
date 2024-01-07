import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import BizAndFinance from "../../../models/bizAndFinance.js";

const chinaBreifing = {
  name: "chinaBreifing",
  Model: BizAndFinance,
  url: "https://www.china-briefing.com/",
  linkSelector: [".article-main a", ".news-title a", ".news-content a"],
  articleSelectors: {
    titleSelector: [".title-border"],
    dateSelector: ["time"],
    contentSelector: [".article-content p"],
    articleContentSelector: [".article-content p"],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: chinaBreifing,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: chinaBreifing,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default chinaBreifing;
