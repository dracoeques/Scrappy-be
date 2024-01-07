import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import BizAndFinance from "../../../models/bizAndFinance.js";

const inc = {
  name: "inc",
  Model: BizAndFinance,
  url: "https://www.incafrica.com/",
  linkSelector: [".gs-3-3 a"],
  articleSelectors: {
    titleSelector: ["h1"],
    dateSelector: [".float-right.ig-type-15.ig-link-color.ig-darkgrey"],
    contentSelector: ["#contentChanged p"],
    articleContentSelector: ["#contentChanged p"],
    screenshot: true,
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: inc,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default inc;
