import { getArticles } from "../../../utils/scrapper/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Entertainment from "../../../models/entertainment.js";

const ndtv = {
  name: "ndtv",
  Model: Entertainment,
  url: "https://www.ndtv.com/",
  linkSelector: [".thumbnail a"],
  articleSelectors: {
    titleSelector: [".sp-ttl"],
    dateSelector: [".pst-by_lnk"],
    contentSelector: [".sp-descp"],
    articleContentSelector: [
      ".sp-ttl-wrp p",
      ".sp-ttl-wrp h2",
      ".sp-ttl-wrp h3",
    ],
  },
};

export const getNews = async () => {
  const res = await getArticles(ndtv);
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(ndtv);
})();

export default ndtv;
