import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import BizAndFinance from "../../../models/bizAndFinance.js";

const nikkeiAsianReview = {
  name: "nikkeiAsianReview",
  Model: BizAndFinance,
  url: "https://asia.nikkei.com/",
  linkSelector: [
    ".spotlight__title",
    ".article-block__content a",
    ".collection-article__title",
  ],
  articleSelectors: {
    titleSelector: [".article-header__title"],
    dateSelector: ["time", ".timestamp"],
    contentSelector: [".article-header__sub-title"],
    articleContentSelector: ["#article-body-preview p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: nikkeiAsianReview,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default nikkeiAsianReview;
