import { getArticles } from "../../../utils/scrapper/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Entertainment from "../../../models/entertainment.js";

const mtvNews = {
  name: "mtvNews",
  Model: Entertainment,
  url: "https://www.mtv.com/news",
  linkSelector: [".article a"],
  articleSelectors: {
    titleSelector: [".headline"],
    dateSelector: [".published-date-time"],
    contentSelector: [".sub-headline"],
    articleContentSelector: [".content-container p"],
  },
};

export const getNews = async () => {
  const res = await getArticles(mtvNews);
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(mtvNews);
})();

export default mtvNews;
