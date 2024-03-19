import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import BizAndFinance from "../../../models/bizAndFinance.js";

const theFintechTimes = {
  name: "theFintechTimes",
  Model: BizAndFinance,
  url: ["https://thefintechtimes.com/"],
  linkSelector: ["h1 a", "h3.penci__post-title a"],
  articleSelectors: {
    titleSelector: [".entry-title"],
    dateSelector: ["time"],
    contentSelector: [".entry-content h4"],
    articleContentSelector: [
      ".entry-content p",
      ".entry-content h1",
      ".entry-content h2",
      ".entry-content h3",
      ".entry-content h4",
      ".entry-content h5",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: theFintechTimes,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default theFintechTimes;
