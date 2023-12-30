import { getArticles } from "../../../utils/scrapper/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Politics from "../../../models/politics.js";

const theNation = {
  name: "theNation",
  Model: Politics,
  url: "https://www.thenation.com/",
  linkSelector: [".title a"],
  articleSelectors: {
    titleSelector: [".article-title__title"],
    dateSelector: [".article-title__date"],
    contentSelector: [".article-title__dek"],
    articleContentSelector: [
      ".blocks-wrapper p",
      ".blocks-wrapper h1",
      ".blocks-wrapper h2",
      ".blocks-wrapper h3",
      ".blocks-wrapper h4",
      ".blocks-wrapper h5",
      ".blocks-wrapper h6",
      ".blocks-wrapper ul",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(theNation);
})();

export default theNation;
