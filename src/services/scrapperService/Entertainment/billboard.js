import { getArticles } from "../../../utils/scrapper/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Entertainment from "../../../models/entertainment.js";

const billboard = {
  name: "billboard",
  Model: Entertainment,
  url: "https://www.billboard.com/",
  linkSelector: [".c-title__link"],
  articleSelectors: {
    titleSelector: [".article-title"],
    dateSelector: ["time"],
    contentSelector: [".article-excerpt"],
    articleContentSelector: [".a-content p"],
  },
};

export const getNews = async () => {
  const res = await getArticles(billboard);
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(billboard);
})();

export default billboard;
