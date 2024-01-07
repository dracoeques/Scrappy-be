import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import BizAndFinance from "../../../models/bizAndFinance.js";

const morningStar = {
  name: "morningStar",
  Model: BizAndFinance,
  url: "https://www.morningstar.com/",
  linkSelector: [".mdc-grid-item__title--link"],
  articleSelectors: {
    titleSelector: [".story__headline"],
    dateSelector: ["time"],
    contentSelector: [".story__subtitle"],
    articleContentSelector: [".story__body p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: morningStar,
      filepath: import.meta.url,
      checkEntryFile: false,
    });
})();

export default morningStar;
