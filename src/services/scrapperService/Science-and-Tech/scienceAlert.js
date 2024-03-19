import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ScienceAndTech from "../../../models/scienceAndTech.js";

const scienceAlert = {
  name: "scienceAlert",
  Model: ScienceAndTech,
  url: ["https://www.sciencealert.com/"],
  linkSelector: ["a.text-legibility"],
  articleSelectors: {
    titleSelector: ["h1"],
    dateSelector: [".article-date"],
    contentSelector: [".post-content p", ".entry-content p"],
    articleContentSelector: [".post-content p", ".entry-content p"],
  },
  selectorWaitTime: 2000,
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: scienceAlert,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default scienceAlert;
