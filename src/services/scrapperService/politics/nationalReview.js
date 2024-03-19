import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Politics from "../../../models/politics.js";

const nationalReview = {
  name: "nationalReview",
  Model: Politics,
  url: "https://www.nationalreview.com/",
  linkSelector: [".post-list-article__title a"],
  articleSelectors: {
    titleSelector: [".article-header__title"],
    dateSelector: ["time"],
    contentSelector: [".article-header__subtitle"],
    articleContentSelector: [".article-content p"],
  },
  articlesWaitUntil: "networkidle1",
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: nationalReview,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default nationalReview;
