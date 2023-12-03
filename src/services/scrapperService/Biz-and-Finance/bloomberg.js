import { getArticles } from "../../../utils/scrapper/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import BizAndFinance from "../../../models/bizAndFinance.js";

const bloomberg = {
  name: "bloomberg",
  Model: BizAndFinance,
  url: "https://www.bloomberg.com/africa",
  linkSelector: ["[data-component='headline'] > a"],
  articleSelectors: {
    titleSelector: [".headline__699ae8fb"],
    dateSelector: ["time"],
    contentSelector: [".abstract__a20fee61"],
    articleContentSelector: [".body-content > p"],
  },
};
export const getNews = async () => {
  const res = await getArticles(bloomberg);
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(bloomberg);
})();

export default bloomberg;
