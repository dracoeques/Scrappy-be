import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import BizAndFinance from "../../../models/bizAndFinance.js";

const businessWire = {
  name: "businessWire",
  Model: BizAndFinance,
  url: ["https://www.businesswire.com/portal/site/home/"],
  linkSelector: [".bwTitleLink"],
  articleSelectors: {
    titleSelector: [".bwalignc"],
    dateSelector: ["time"],
    contentSelector: [".bw-release-mm-caption"],
    articleContentSelector: [
      ".bw-release-mm p",
      ".bw-release-mm h1",
      ".bw-release-mm h2",
      ".bw-release-mm h3",
      ".bw-release-mm h4",
      ".bw-release-mm h5",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: businessWire,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default businessWire;
