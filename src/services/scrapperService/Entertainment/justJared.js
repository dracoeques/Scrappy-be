import { getArticles } from "../../../utils/scrapper/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Entertainment from "../../../models/entertainment.js";

const justJared = {
  name: "justJared",
  Model: Entertainment,
  url: "https://www.justjared.com/",
  linkSelector: [".external"],
  articleSelectors: {
    titleSelector: [".post h1"],
    dateSelector: [".post-date"],
    contentSelector: [".entry p"],
    articleContentSelector: [".entry p"],
  },
};

export const getNews = async () => {
  const res = await getArticles(justJared);
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(justJared);
})();

export default justJared;
