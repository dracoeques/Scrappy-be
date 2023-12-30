import { getArticles } from "../../../utils/scrapper/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Politics from "../../../models/politics.js";

const yahooPolitics = {
  name: "yahooPolitics",
  Model: Politics,
  url: "https://news.yahoo.com/politics/",
  linkSelector: [".js-content-viewer"],
  articleSelectors: {
    titleSelector: ["[data-test-locator='headline']"],
    dateSelector: ["time"],
    contentSelector: [".caas-subheadline"],
    articleContentSelector: [".caas-body > p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(yahooPolitics);
})();

export default yahooPolitics;
