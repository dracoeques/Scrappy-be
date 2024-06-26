import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import ScienceAndTech from "../../../models/scienceAndTech.js";

const scientificAmerican = {
  name: "scientificAmerican",
  Model: ScienceAndTech,
  url: "https://www.scientificamerican.com/",
  linkSelector: ["article a"],
  articleSelectors: {
    titleSelector: [".t_article-title"],
    dateSelector: ["time"],
    contentSelector: [".t_article-subtitle"],
    articleContentSelector: [".article-text p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: scientificAmerican,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default scientificAmerican;
