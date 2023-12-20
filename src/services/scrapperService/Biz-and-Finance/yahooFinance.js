import { getArticles } from "../../../utils/scrapper/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import BizAndFinance from "../../../models/bizAndFinance.js";

const yahooFinance = {
  name: "yahooFinance",
  Model: BizAndFinance,
  url: "https://finance.yahoo.com/",
  linkSelector: [".js-content-viewer"],
  articleSelectors: {
    titleSelector: ["[data-test-locator='headline']"],
    dateSelector: ["time"],
    contentSelector: [".caas-subheadline"],
    articleContentSelector: [".caas-body > p"],
  },
};

export const getNews = async () => {
  const res = await getArticles(yahooFinance);
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(yahooFinance);
})();

export default yahooFinance;
