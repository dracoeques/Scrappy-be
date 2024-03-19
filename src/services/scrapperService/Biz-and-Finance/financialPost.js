import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import BizAndFinance from "../../../models/bizAndFinance.js";

const financialPost = {
  name: "financialPost",
  Model: BizAndFinance,
  url: ["https://financialpost.com/"],
  linkSelector: [".article-card__link"],
  articleSelectors: {
    titleSelector: [".article-title"],
    dateSelector: [".published-date__since"],
    contentSelector: [".article-subtitle"],
    articleContentSelector: [
      ".article-content__content-group p",
      ".article-content__content-group h1",
      ".article-content__content-group h2",
      ".article-content__content-group h3",
      ".article-content__content-group h4",
      ".article-content__content-group h5",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: financialPost,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default financialPost;
