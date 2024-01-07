import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Politics from "../../../models/politics.js";

const politiFact = {
  name: "politiFact",
  Model: Politics,
  url: "https://www.politifact.com/",
  linkSelector: [".m-statement__quote a"],
  articleSelectors: {
    titleSelector: [".c-title"],
    dateSelector: [".m-author__date"],
    contentSelector: [".m-callout__body p"],
    articleContentSelector: [
      ".m-textblock p",
      ".m-textblock h1",
      ".m-textblock h2",
      ".m-textblock h3",
      ".m-textblock h4",
      ".m-textblock h5",
      ".m-textblock h6",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: politiFact,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default politiFact;
