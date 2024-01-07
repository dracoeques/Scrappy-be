import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import BizAndFinance from "../../../models/bizAndFinance.js";

const internationalBusinessTimes = {
  name: "internationalBusinessTimes",
  Model: BizAndFinance,
  url: "https://www.ibtimes.com/",
  linkSelector: [".heading a"],
  articleSelectors: {
    titleSelector: [".article-header h1"],
    dateSelector: ["time"],
    contentSelector: [".article-paywall-contents p"],
    articleContentSelector: [".article-paywall-contents p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: internationalBusinessTimes,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default internationalBusinessTimes;
