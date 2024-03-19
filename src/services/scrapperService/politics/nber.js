import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Politics from "../../../models/politics.js";

const nber = {
  name: "nber",
  Model: Politics,
  url: "https://www.nber.org/",
  linkSelector: [".home-left-rail__item-title", ".digest-card__title a"],
  articleSelectors: {
    titleSelector: [".page-header__title", ".post__title"],
    dateSelector: [
      ".page-header__issue-label a",
      ".wrapper__post-date",
      "time",
    ],
    contentSelector: [
      ".page-header__intro p",
      ".content__section p",
      ".content__section h2",
      ".content__section h1",
    ],
    articleContentSelector: [
      ".page-header__intro  p",
      ".content__section p",
      ".content__section h2",
      ".content__section h1",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: nber,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default nber;
