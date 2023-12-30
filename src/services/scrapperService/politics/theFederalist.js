import { getArticles } from "../../../utils/scrapper/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Politics from "../../../models/politics.js";

const theFederalist = {
  name: "theFederalist",
  Model: Politics,
  url: "https://thefederalist.com/",
  linkSelector: ["h1 a", "h2 a"],
  articleSelectors: {
    titleSelector: [".title-lg"],
    dateSelector: ["time"],
    contentSelector: [".article-excerpt"],
    articleContentSelector: [
      ".article-content p",
      ".article-content h1",
      ".article-content h2",
      ".article-content h3",
      ".article-content h4",
      ".article-content h5",
      ".article-content h6",
      ".article-content ul",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(theFederalist);
})();

export default theFederalist;
