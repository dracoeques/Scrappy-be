import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import BizAndFinance from "../../../models/bizAndFinance.js";

const investing = {
  name: "investing",
  Model: BizAndFinance,
  url: ["https://www.investing.com/", "https://investing.com/news/latest-news"],
  linkSelector: [".text-3xl a", "a.text-base", "a.title"],
  articleSelectors: {
    titleSelector: [".articleHeader"],
    dateSelector: [".contentSectionDetails span:nth-of-type(1)"],
    contentSelector: [".articlePage p"],
    articleContentSelector: [
      ".articlePage p",
      ".articlePage h1",
      ".articlePage h2",
      ".articlePage h3",
      ".articlePage h4",
      ".articlePage h5",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: investing,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default investing;
