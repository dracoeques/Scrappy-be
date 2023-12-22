import { getArticles } from "../../../utils/scrapper/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Entertainment from "../../../models/entertainment.js";

const chinaDaily = {
  name: "chinaDaily",
  Model: Entertainment,
  url: "https://www.chinadaily.com.cn/",
  linkSelector: [".fcon a", ".Txt a", ".Txt2 a", ".txt2 a", ".twBox a"],
  articleSelectors: {
    titleSelector: [".ce_art h1", "h1"],
    dateSelector: [".info_l", ".data"],
    contentSelector: ["#Content p"],
    articleContentSelector: ["#Content p", "#Content h2", "#Content h3"],
  },
};

export const getNews = async () => {
  const res = await getArticles(chinaDaily);
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(chinaDaily);
})();

export default chinaDaily;
