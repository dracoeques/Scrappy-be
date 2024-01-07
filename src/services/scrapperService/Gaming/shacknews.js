import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Gaming from "../../../models/gaming.js";

const shackNews = {
  name: "shackNews",
  Model: Gaming,
  url: "https://shacknews.com/",
  linkSelector: [".article-image a", ".walkthrough a"],
  articleSelectors: {
    titleSelector: [".article-title"],
    dateSelector: ["time"],
    contentSelector: [".article-lead-bottom-content description"],
    articleContentSelector: [
      ".article-content-wrapper p",
      ".article-content-wrapper h1",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: shackNews,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default shackNews;
