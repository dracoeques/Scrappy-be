import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import LifestyleAndHealth from "../../../models/lifestyleAndHealth.js";

const businessInsider = {
  name: "businessInsider",
  Model: LifestyleAndHealth,
  url: [
    "https://www.businessinsider.com/lifestyle",
    "https://www.businessinsider.com/healthcare",
  ],
  linkSelector: ["h2 a"],
  articleSelectors: {
    titleSelector: [".post-headline", ".article-headline"],
    dateSelector: ["time?datetime", "time", ".byline-timestamp"],
    contentSelector: [".enhanced-subtitle", ".summary-list"],
    articleContentSelector: [
      ".content-lock-content p",
      ".content-lock-content h2",
      ".article-body-text p",
      ".article-body-text h3",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: businessInsider,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default businessInsider;
