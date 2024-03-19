import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import LifestyleAndHealth from "../../../models/lifestyleAndHealth.js";

const hollywoodReporter = {
  name: "hollywoodReporter",
  Model: LifestyleAndHealth,
  url: ["https://www.hollywoodreporter.com/c/lifestyle/"],
  linkSelector: [".c-title__link", ".o-card__content  a.lrv-a-unstyle-link"],
  articleSelectors: {
    titleSelector: [".article-title", "h1"],
    dateSelector: ["time?datetime"],
    contentSelector: [".article-excerpt"],
    articleContentSelector: [
      ".a-content p",
      ".a-content h2",
      ".a-content h3",
      ".a-content h4",
      ".a-content h5",
      ".a-content h6",
      ".a-content ul",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: hollywoodReporter,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default hollywoodReporter;
