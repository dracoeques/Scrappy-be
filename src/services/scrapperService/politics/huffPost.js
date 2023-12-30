import { getArticles } from "../../../utils/scrapper/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Politics from "../../../models/politics.js";

const huffPost = {
  name: "huffPost",
  Model: Politics,
  url: "https://www.huffpost.com/",
  linkSelector: [".card__image__link"],
  articleSelectors: {
    titleSelector: [".headline"],
    dateSelector: ["time"],
    contentSelector: [".entry__content-list p"],
    articleContentSelector: [
      ".entry__content-list p",
      ".entry__content-list h1",
      ".entry__content-list h2",
      ".entry__content-list h3",
      ".entry__content-list h4",
      ".entry__content-list h5",
      ".entry__content-list h6",
      ".entry__content-list ul",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(huffPost);
})();

export default huffPost;
