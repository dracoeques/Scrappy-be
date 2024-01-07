import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Politics from "../../../models/politics.js";

const reuters = {
  name: "reuters",
  Model: Politics,
  url: "https://www.reuters.com/",
  linkSelector: ["a[data-testid='Heading']"],
  articleSelectors: {
    titleSelector: [".article-header__title__3Y2hh"],
    dateSelector: ["time > .date-line__date__23Ge-:nth-child(2)"],
    contentSelector: [".article-body__content__17Yit > p"],
    articleContentSelector: [".article-body__content__17Yit > p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: reuters,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default reuters;
