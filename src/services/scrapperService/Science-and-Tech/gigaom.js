import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import ScienceAndTech from "../../../models/scienceAndTech.js";

const gigaom = {
  name: "gigaom",
  Model: ScienceAndTech,
  url: "https://gigaom.com/",
  linkSelector: [".entry-title a"],
  articleSelectors: {
    titleSelector: [".entry-title"],
    dateSelector: ["time"],
    contentSelector: [".entry-content p"],
    articleContentSelector: [".entry-content p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: gigaom,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default gigaom;
