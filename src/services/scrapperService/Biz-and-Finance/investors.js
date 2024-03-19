import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import BizAndFinance from "../../../models/bizAndFinance.js";

const investors = {
  name: "investors",
  Model: BizAndFinance,
  url: ["https://www.investors.com/"],
  linkSelector: [
    ".article-item",
    ".carousel-body-item-content",
    ".singleNewItem a",
    ".carousel-body-item a",
  ],
  articleSelectors: {
    titleSelector: [".header1"],
    dateSelector: [".post-time"],
    contentSelector: [".bw-release-mm-caption"],
    articleContentSelector: [
      ".single-post-content p",
      ".single-post-content h1",
      ".single-post-content h2",
      ".single-post-content h3",
      ".single-post-content h4",
      ".single-post-content h5",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: investors,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default investors;
