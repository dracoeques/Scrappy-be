import { getArticles } from "../../../utils/scrapper/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Politics from "../../../models/politics.js";

const slate = {
  name: "slate",
  Model: Politics,
  url: "https://slate.com/",
  linkSelector: [
    ".story-teaser a",
    ".story-card a",
    ".homepage-advice__stack li a",
    ".recent-stories-item",
    ".most-engaged-teaser__link",
    ".section-feed-two-column__teaser",
    ".section-feed-three-column__teaser",
  ],
  articleSelectors: {
    titleSelector: [".article__hed"],
    dateSelector: ["time"],
    contentSelector: [".article__dek"],
    articleContentSelector: [
      ".article__content p",
      ".article__content h1",
      ".article__content h2",
      ".article__content h3",
      ".article__content h4",
      ".article__content h5",
      ".article__content h6",
      ".article__content ul",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(slate);
})();

export default slate;
