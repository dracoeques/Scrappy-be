import { getArticles } from "../../../utils/scrapper/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Entertainment from "../../../models/entertainment.js";

const vulture = {
  name: "vulture",
  Model: Entertainment,
  url: "https://www.vulture.com/",
  linkSelector: [
    ".main-article-content a",
    ".most-popular-item a",
    ".item a",
    ".feed-text-wrap a",
  ],
  articleSelectors: {
    titleSelector: [".headline-primary"],
    dateSelector: [".article-date"],
    contentSelector: [".news_title_area h2"],
    articleContentSelector: [
      ".article-content p",
      ".article-content h2",
      ".article-content h3",
    ],
  },
};

export const getNews = async () => {
  const res = await getArticles(vulture);
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(vulture);
})();

export default vulture;
