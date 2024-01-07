import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import ScienceAndTech from "../../../models/scienceAndTech.js";

const techCrunch = {
  name: "techCrunch",
  Model: ScienceAndTech,
  url: "https://techcrunch.com/",
  linkSelector: [".mini-view__item__title a", ".post-block__title__link"],
  articleSelectors: {
    titleSelector: [".article__title"],
    dateSelector: ["time"],
    contentSelector: [".article-content p"],
    articleContentSelector: [".article-content p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: techCrunch,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default techCrunch;
