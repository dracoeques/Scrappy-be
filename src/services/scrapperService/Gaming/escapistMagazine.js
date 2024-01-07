import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Gaming from "../../../models/gaming.js";

const escapistNews = {
  name: "escapistNews",
  Model: Gaming,
  url: "https://www.escapistmagazine.com/",
  linkSelector: [".post__title a"],
  articleSelectors: {
    titleSelector: [".entry-title"],
    dateSelector: ["time"],
    contentSelector: [".entry-content p"],
    articleContentSelector: [".entry-content p", ".entry-content h1"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: escapistNews,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default escapistNews;
