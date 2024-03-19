import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import ScienceAndTech from "../../../models/scienceAndTech.js";

const scienceFriday = {
  name: "scienceFriday",
  Model: ScienceAndTech,
  url: "https://www.sciencefriday.com/",
  linkSelector: ["h2 a", ".click-whole-area"],
  articleSelectors: {
    titleSelector: [".entry-title", "h1"],
    dateSelector: [".posted-on"],
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
      article: scienceFriday,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default scienceFriday;
