import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import ScienceAndTech from "../../../models/scienceAndTech.js";

const phys = {
  name: "phys",
  Model: ScienceAndTech,
  url: "https://phys.org/",
  linkSelector: [".news-link"],
  articleSelectors: {
    titleSelector: ["h1"],
    dateSelector: [".article__info-item p"],
    contentSelector: [".article-main p"],
    articleContentSelector: [
      ".article-main p",
      ".article-main h2",
      ".article-main h4",
    ],
  },
  selectorWaitTime: 8000,
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: phys,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default phys;
