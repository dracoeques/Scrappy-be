import { getArticles } from "../../../utils/scrapper/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import BizAndFinance from "../../../models/bizAndFinance.js";

const reuters = {
  name: "reuters",
  Model: BizAndFinance,
  url: "https://www.reuters.com/world/us/",
  linkSelector: [".media-story-card__headline__tFMEu"],
  articleSelectors: {
    titleSelector: [".heading__heading_3__3aL54"],
    dateSelector: ["time"],
    contentSelector: [".article-body__content__17Yit p"],
    articleContentSelector: [".article-body__content__17Yit p"],
  },
};

export const getNews = async () => {
  const res = await getArticles(reuters);
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(reuters);
})();

export default reuters;
