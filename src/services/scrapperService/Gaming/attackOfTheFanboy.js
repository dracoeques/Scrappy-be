import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Gaming from "../../../models/gaming.js";

const attackOfTheFanboy = {
  name: "attackOfTheFanboy",
  Model: Gaming,
  url: "https://attackofthefanboy.com/",
  linkSelector: [".wp-block-gamurs-article-tile__link"],
  articleSelectors: {
    titleSelector: [".wp-block-gamurs-article-header__content--title", "h1"],
    dateSelector: [
      ".wp-block-gamurs-article-metadata__date-and-time?data-datetime",
    ],
    contentSelector: [".wp-block-gamurs-article-content p"],
    articleContentSelector: [
      ".wp-block-gamurs-article-content p",
      ".wp-block-gamurs-article-content h2",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: attackOfTheFanboy,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default attackOfTheFanboy;
