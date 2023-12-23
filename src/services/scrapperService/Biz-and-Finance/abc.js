import { getArticles } from "../../../utils/scrapper/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import BizAndFinance from "../../../models/bizAndFinance.js";

const abc = {
  name: "abc",
  Model: BizAndFinance,
  url: "https://www.abc.net.au/",
  linkSelector: [".ContentCard_link__x6IlW"],
  articleSelectors: {
    titleSelector: [".Headline_meta__ZgyGe .Heading_heading__VGa5B"],
    dateSelector: ["time"],
    contentSelector: [".Article_body__y7ykc p"],
    articleContentSelector: [".Article_body__y7ykc p"],
  },
};

export const getNews = async () => {
  const res = await getArticles(abc);
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(abc);
})();

export default abc;
