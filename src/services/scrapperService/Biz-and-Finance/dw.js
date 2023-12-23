import { getArticles } from "../../../utils/scrapper/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import BizAndFinance from "../../../models/bizAndFinance.js";

const dw = {
  name: "dw",
  Model: BizAndFinance,
  url: "https://www.dw.com/en/top-stories/s-9097",
  linkSelector: [".teaser-data .eSwfXC"],
  articleSelectors: {
    titleSelector: [".gdCDMT"],
    dateSelector: ["time"],
    contentSelector: [".teaser-text"],
    articleContentSelector: [".rich-text p"],
  },
};

export const getNews = async () => {
  const res = await getArticles(dw);
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(dw);
})();

export default dw;
