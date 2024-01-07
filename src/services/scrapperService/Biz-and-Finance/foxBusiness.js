import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import BizAndFinance from "../../../models/bizAndFinance.js";

const foxBusiness = {
  name: "foxBusiness",
  Model: BizAndFinance,
  url: "https://www.foxbusiness.com/",
  linkSelector: [".title a"],
  articleSelectors: {
    titleSelector: [".headline"],
    dateSelector: ["time"],
    contentSelector: [".sub-headline"],
    articleContentSelector: [".article-body p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: foxBusiness,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default foxBusiness;
