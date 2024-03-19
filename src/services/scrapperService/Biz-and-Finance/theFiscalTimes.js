import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import BizAndFinance from "../../../models/bizAndFinance.js";

const theFiscalTimes = {
  name: "theFiscalTimes",
  Model: BizAndFinance,
  url: ["https://www.thefiscaltimes.com/home"],
  linkSelector: ["h3 a", "h5 a"],
  articleSelectors: {
    titleSelector: ["#page-title", "h1"],
    dateSelector: [".date-display-single"],
    contentSelector: [".field-items p", ".field-content"],
    articleContentSelector: [
      ".field-items p",
      ".field-content p",
      ".field-items h1",
      ".field-items h2",
      ".field-items h3",
      ".field-items h4",
      ".field-items h5",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: theFiscalTimes,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default theFiscalTimes;
