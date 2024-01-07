import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import BizAndFinance from "../../../models/bizAndFinance.js";

const zacksInvestmentResearch = {
  name: "zacksInvestmentResearch",
  Model: BizAndFinance,
  url: "https://www.zacks.com/",
  linkSelector: ["article a"],
  articleSelectors: {
    titleSelector: ["article h1 "],
    dateSelector: ["time"],
    contentSelector: ["#comtext p"],
    articleContentSelector: ["#comtext p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: zacksInvestmentResearch,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default zacksInvestmentResearch;
