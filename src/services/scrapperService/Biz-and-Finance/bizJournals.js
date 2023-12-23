import { getArticles } from "../../../utils/scrapper/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import BizAndFinance from "../../../models/bizAndFinance.js";

const bizJournals = {
  name: "bizJournals",
  Model: BizAndFinance,
  url: "https://www.bizJournals.com/",
  linkSelector: [".bizj_leading-stretch-link", ".bizj_leadin-stretch-link"],
  articleSelectors: {
    titleSelector: ["#ArticleHeader h1"],
    dateSelector: ["time"],
    contentSelector: ["[data-dev='ArticleContent'] p"],
    articleContentSelector: ["[data-dev='ArticleContent'] p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(bizJournals);
})();

export default bizJournals;
