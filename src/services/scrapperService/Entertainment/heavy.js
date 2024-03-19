import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Entertainment from "../../../models/entertainment.js";

const heavy = {
  name: "heavy",
  Model: Entertainment,
  url: ["https://heavy.com/"],
  linkSelector: [".l-headlines__link", ".c-article__link"],
  articleSelectors: {
    titleSelector: [".entry-title"],
    dateSelector: ["time"],
    contentSelector: [".entry-content p"],
    articleContentSelector: [
      ".entry-content p",
      ".entry-content h2",
      ".entry-content h3",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: heavy,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default heavy;
