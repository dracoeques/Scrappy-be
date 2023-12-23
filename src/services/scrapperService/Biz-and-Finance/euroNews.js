import { getArticles } from "../../../utils/scrapper/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import BizAndFinance from "../../../models/bizAndFinance.js";

const euroNews = {
  name: "euroNews",
  Model: BizAndFinance,
  url: "https://www.euronews.com/",
  linkSelector: [".m-object__title__link"],
  articleSelectors: {
    titleSelector: [".c-article-redesign-title"],
    dateSelector: [".c-article-publication-date", "time"],
    contentSelector: [".c-article-summary"],
    articleContentSelector: [".c-article-content p"],
  },
};

export const getNews = async () => {
  const res = await getArticles(euroNews);
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(euroNews);
})();

export default euroNews;
