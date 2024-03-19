import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Entertainment from "../../../models/entertainment.js";

const apNews = {
  name: "apNews",
  Model: Entertainment,
  url: ["https://apnews.com/entertainment"],
  linkSelector: [".Link"],
  articleSelectors: {
    titleSelector: [".Page-headline"],
    dateSelector: [".Page-dateModified"],
    contentSelector: [".content__body p"],
    articleContentSelector: [
      ".RichTextStoryBody p",
      ".RichTextStoryBody h2",
      ".RichTextStoryBody h3",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: apNews,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default apNews;
