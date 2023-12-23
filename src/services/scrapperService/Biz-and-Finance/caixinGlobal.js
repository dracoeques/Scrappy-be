import { getArticles } from "../../../utils/scrapper/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import BizAndFinance from "../../../models/bizAndFinance.js";

const caixinGlobal = {
  name: "caixinGlobal",
  Model: BizAndFinance,
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
  if (isEntryFile) await getArticles(caixinGlobal);
})();

export default caixinGlobal;
