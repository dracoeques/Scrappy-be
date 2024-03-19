import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import LifestyleAndHealth from "../../../models/lifestyleAndHealth.js";

const bbc = {
  name: "bbc",
  Model: LifestyleAndHealth,
  url: "https://www.bbc.com/travel",
  linkSelector: [
    ".rectangle-story-item__title",
    ".article-hero__content-title a",
    ".article-title-card-rectangle__link",
  ],
  articleSelectors: {
    titleSelector: [".article-headline__text"],
    dateSelector: ["time", ".author-unit__container span"],
    contentSelector: [".body-text-card p"],
    articleContentSelector: [".body-text-card p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: bbc,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default bbc;
