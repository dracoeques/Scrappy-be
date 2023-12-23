import { getArticles } from "../../../utils/scrapper/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import BizAndFinance from "../../../models/bizAndFinance.js";

const businessStandard = {
  name: "businessStandard",
  Model: BizAndFinance,
  url: "https://www.business-standard.com/",
  linkSelector: [".main-title a", ".cardlist a"],
  articleSelectors: {
    titleSelector: [".stryhdtp"],
    dateSelector: [".meta-info"],
    contentSelector: [".storycontent p"],
    articleContentSelector: [".storycontent div"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(businessStandard);
})();

export default businessStandard;
