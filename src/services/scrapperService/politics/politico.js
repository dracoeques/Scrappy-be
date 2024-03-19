import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Politics from "../../../models/politics.js";

const politico = {
  name: "politico",
  Model: Politics,
  url: [
    "https://www.politico.com/news/foreign-affairs",
    "https://www.politico.com/news/2024-elections",
    "https://www.politico.eu/uk/",
    "https://www.politico.com/",
  ],
  linkSelector: [".headline > a", "h2 a", "h1 a", "h3 a"],
  articleSelectors: {
    titleSelector: [".headline", ".article-meta__title"],
    dateSelector: ["time", ".date-time", ".date-time__date"],
    contentSelector: [".dek", ".article-meta__excerpt", ".article__content p"],
    articleContentSelector: [
      ".story-text > p",
      ".story-text__paragraph",
      ".article__content p",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: politico,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default politico;
