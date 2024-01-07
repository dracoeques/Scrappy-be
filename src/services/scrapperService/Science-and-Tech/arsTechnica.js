import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import ScienceAndTech from "../../../models/scienceAndTech.js";

const arsTechnica = {
  name: "arsTechnica",
  Model: ScienceAndTech,
  url: "https://arstechnica.com/",
  linkSelector: [".article a"],
  articleSelectors: {
    titleSelector: ["header h1"],
    dateSelector: ["header h2"],
    contentSelector: [".description"],
    articleContentSelector: [
      ".article-guts p",
      ".article-guts h2",
      ".article-guts h4",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: arsTechnica,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default arsTechnica;
