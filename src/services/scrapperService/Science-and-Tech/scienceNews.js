import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import ScienceAndTech from "../../../models/scienceAndTech.js";

const scienceNews = {
  name: "scienceNews",
  Model: ScienceAndTech,
  url: "https://www.sciencenews.org/",
  linkSelector: ["h3 a", "h2 a"],
  articleSelectors: {
    titleSelector: [".header-default__title___ychM4", "h1"],
    dateSelector: ["time?datetime"],
    contentSelector: [".header-default__deck___UAY0V"],
    articleContentSelector: [
      ".single__content___9ekjR p",
      ".single__content___9ekjR h2",
      ".single__content___9ekjR h4",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: scienceNews,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default scienceNews;
