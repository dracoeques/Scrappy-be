import BizAndFinance from "../../../models/bizAndFinance.js";
import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

const australianFinancialReview = {
  name: "australianFinancialReview",
  Model: BizAndFinance,
  url: "https://www.afr.com/",
  linkSelector: ["h3 a"],
  articleSelectors: {
    titleSelector: ["[data-testid='ArticleHeader-headline']"],
    dateSelector: ["time"],
    contentSelector: [".ECcGH p"],
    articleContentSelector: [".VtXRu p"],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: australianFinancialReview,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: australianFinancialReview,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default australianFinancialReview;
