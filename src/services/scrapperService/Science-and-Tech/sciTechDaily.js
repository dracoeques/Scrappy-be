import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import ScienceAndTech from "../../../models/scienceAndTech.js";

const sciTechDaily = {
  name: "sciTechDaily",
  Model: ScienceAndTech,
  url: "https://scitechdaily.com/",
  linkSelector: ["h3 a"],
  articleSelectors: {
    titleSelector: [".entry-title", "h1"],
    dateSelector: [".ticker-item-date"],
    contentSelector: [".entry-excerpt p"],
    articleContentSelector: [
      ".entry-content p",
      ".entry-content h2",
      ".entry-content h4",
    ],
  },
  selectorWaitTime: 8000,
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: sciTechDaily,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default sciTechDaily;
