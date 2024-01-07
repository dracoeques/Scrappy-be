import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Politics from "../../../models/politics.js";

const reason = {
  name: "reason",
  Model: Politics,
  url: "https://reason.com/",
  linkSelector: ["h4 a"],
  articleSelectors: {
    titleSelector: [".entry-title"],
    dateSelector: ["time"],
    contentSelector: [".story__text p"],
    articleContentSelector: [
      ".entry-content p",
      ".entry-content h1",
      ".entry-content h2",
      ".entry-content h3",
      ".entry-content h4",
      ".entry-content h5",
      ".entry-content h6",
      ".entry-content ul",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: reason,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default reason;
