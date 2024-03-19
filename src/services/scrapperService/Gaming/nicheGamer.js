import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Gaming from "../../../models/gaming.js";

const nicheGamer = {
  name: "nicheGamer",
  Model: Gaming,
  url: "https://nichegamer.com/",
  linkSelector: [".top_posts_url", ".entry-title a"],
  articleSelectors: {
    titleSelector: [".entry-title", "h1"],
    dateSelector: [".entry-meta"],
    contentSelector: [".entry-content p"],
    articleContentSelector: [".entry-content p", ".entry-content blockquote"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: nicheGamer,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default nicheGamer;
