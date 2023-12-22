import { getArticles } from "../../../utils/scrapper/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Entertainment from "../../../models/entertainment.js";

const dailyDot = {
  name: "dailyDot",
  Model: Entertainment,
  url: "https://www.dailydot.com/",
  linkSelector: [".featured-article a", ".tiled-article > a"],
  articleSelectors: {
    titleSelector: [".article-head"],
    dateSelector: [".date-stamp"],
    contentSelector: [".article-sub-head"],
    articleContentSelector: [
      ".article-content-wrapper p",
      ".article-content-wrapper h2",
      ".article-content-wrapper h3",
    ],
  },
};

export const getNews = async () => {
  const res = await getArticles(dailyDot);
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(dailyDot);
})();

export default dailyDot;
