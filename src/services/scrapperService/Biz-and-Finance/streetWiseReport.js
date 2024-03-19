import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import BizAndFinance from "../../../models/bizAndFinance.js";

const streetWiseReport = {
  name: "streetWiseReport",
  Model: BizAndFinance,
  url: ["https://www.streetwisereports.com/"],
  linkSelector: ["h3 a"],
  articleSelectors: {
    titleSelector: [".articleTitle"],
    dateSelector: ["[itemprop='datePublished']"],
    contentSelector: [".articleSummary"],
    articleContentSelector: [
      "#articleBody p",
      "#articleBody h1",
      "#articleBody h2",
      "#articleBody h3",
      "#articleBody h4",
      "#articleBody h5",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: streetWiseReport,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default streetWiseReport;
