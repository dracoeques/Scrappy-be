import { getArticles } from "../../../utils/scrapper/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Entertainment from "../../../models/entertainment.js";

const tmz = {
  name: "tmz",
  Model: Entertainment,
  url: "https://www.tmz.com/",
  linkSelector: [
    ".media-list__card-link ",
    ".hero-bar__card-link",
    ".article__header-link",
    ".spotlight__card-link",
  ],
  articleSelectors: {
    titleSelector: [".article__header-title", ".header-title"],
    dateSelector: [".article__published-at"],
    contentSelector: [".article__headline-title"],
    articleContentSelector: [".article__blocks p"],
  },
};

export const getNews = async () => {
  const res = await getArticles(tmz);
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(tmz);
})();

export default tmz;
