import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Entertainment from "../../../models/entertainment.js";

const indieWire = {
  name: "indieWire",
  Model: Entertainment,
  url: ["https://www.indiewire.com/"],
  linkSelector: ["[data-alias='card__card-title'] a"],
  articleSelectors: {
    titleSelector: ["[data-alias='article-header__headline']"],
    dateSelector: ["time"],
    contentSelector: ["[data-alias='article-header__dek']"],
    articleContentSelector: [
      "[data-template='article'] p",
      "[data-template='article'] h2",
      "[data-template='article'] h3",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: indieWire,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default indieWire;
