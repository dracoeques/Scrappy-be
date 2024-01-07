import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Politics from "../../../models/politics.js";

const alJazeera = {
  name: "alJazeera",
  Model: Politics,
  url: "https://www.aljazeera.com/",
  waitFor: [".css-m0f37v:nth-child(1)"],
  linkSelector: [".u-clickable-card__link"],
  articleSelectors: {
    titleSelector: [".article-header > h1"],
    dateSelector: [".article-dates  .screen-reader-text"],
    contentSelector: [".article__subhead"],
    articleContentSelector: [
      ".wysiwyg > p",
      ".wysiwyg > h2",
      ".wysiwyg > ul > li",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: alJazeera,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default alJazeera;
