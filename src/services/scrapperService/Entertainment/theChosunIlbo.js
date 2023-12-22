import { getArticles } from "../../../utils/scrapper/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Entertainment from "../../../models/entertainment.js";

const choSunIlbo = {
  name: "choSunIlbo",
  Model: Entertainment,
  url: "https://english.chosun.com/",
  linkSelector: [
    ".asideBox_add dt a",
    ".asideBox_add li a",
    ".title a",
    ".main_item dt a",
  ],
  articleSelectors: {
    titleSelector: ["#news_title_text_id", "h1"],
    dateSelector: ["#date_text"],
    contentSelector: [".par div"],
    articleContentSelector: [".par div"],
  },
};

export const getNews = async () => {
  const res = await getArticles(choSunIlbo);
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(choSunIlbo);
})();

export default choSunIlbo;
