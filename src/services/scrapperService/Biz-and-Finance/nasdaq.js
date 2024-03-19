import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import BizAndFinance from "../../../models/bizAndFinance.js";

const nasdaq = {
  name: "nasdaq",
  Model: BizAndFinance,
  url: ["https://www.nasdaq.com/"],
  linkSelector: ["h3 a", ".jupiter22-c-article-list__item_content a"],
  articleSelectors: {
    titleSelector: [".article-header__headline"],
    dateSelector: ["time", ".jupiter22-c-author-byline__timestamp"],
    contentSelector: [".body__content p"],
    articleContentSelector: [
      ".body__content p",
      ".body__content h1",
      ".body__content h2",
      ".body__content h3",
      ".body__content h4",
      ".body__content h5",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: nasdaq,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default nasdaq;
