import { getArticles } from "../../get-articles.js";
import { checkIsEntryFile } from "../../utils.js";

const caixinGlobal = {
  name: "caixinGlobal",
  saveDir: "Biz-and-Finance",
  url: "https://www.caixinglobal.com/",
  linkSelector: ["dd a"],
  articleSelectors: {
    titleSelector: [".cons-title"],
    dateSelector: [".cons-date"],
    contentSelector: [".cons-box p"],
    articleContentSelector: [".cons-box p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(caixinGlobal, 2);
})();

export default caixinGlobal;
