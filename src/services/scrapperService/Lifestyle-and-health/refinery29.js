import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import LifestyleAndHealth from "../../../models/lifestyleAndHealth.js";

const refinary29 = {
  name: "refinary29",
  Model: LifestyleAndHealth,
  url: ["https://www.refinery29.com/en-us"],
  linkSelector: [".hero-card-full-width a", ".card a"],
  articleSelectors: {
    titleSelector: [".title", "h1"],
    dateSelector: ["time", ".byline"],
    contentSelector: [".section-text"],
    articleContentSelector: [".section-text"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: refinary29,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default refinary29;
