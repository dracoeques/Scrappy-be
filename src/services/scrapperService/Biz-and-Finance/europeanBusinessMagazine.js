import { getArticles } from "../../../utils/scrapper/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import BizAndFinance from "../../../models/bizAndFinance.js";

const europeanBusinessMagazine = {
  name: "europeanBusinessMagazine",
  Model: BizAndFinance,
  url: "https://europeanbusinessmagazine.com/",
  linkSelector: [".td-module-thumb a"],
  articleSelectors: {
    titleSelector: [".entry-title"],
    dateSelector: ["time"],
    contentSelector: [".td-post-content p"],
    articleContentSelector: [".td-post-content p"],
  },
};

export const getNews = async () => {
  const res = await getArticles(europeanBusinessMagazine);
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(europeanBusinessMagazine);
})();

export default europeanBusinessMagazine;
