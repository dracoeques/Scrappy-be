import { getArticles } from "../../../utils/scrapper/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Politics from "../../../models/politics.js";

const npr = {
  name: "npr",
  Model: Politics,
  url: "https://www.npr.org/",
  linkSelector: [".slug-wrap + a"],
  articleSelectors: {
    titleSelector: [".storytitle"],
    dateSelector: [".date"],
    contentSelector: [".storytext p"],
    articleContentSelector: [
      ".storytext p",
      ".storytext h1",
      ".storytext h2",
      ".storytext h3",
      ".storytext h4",
      ".storytext h5",
      ".storytext h6",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(npr);
})();

export default npr;
