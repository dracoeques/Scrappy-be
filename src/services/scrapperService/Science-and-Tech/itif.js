import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ScienceAndTech from "../../../models/scienceAndTech.js";

const itif = {
  name: "itif",
  Model: ScienceAndTech,
  url: ["https://itif.org/"],
  linkSelector: ["a.hover\\:underline"],
  articleSelectors: {
    titleSelector: ["h1"],
    dateSelector: [".block.lg\\:inline-block"],
    contentSelector: [".summary-divider p"],
    articleContentSelector: [".summary-divider p"],
  },
  selectorWaitTime: 2000,
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: itif,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default itif;
