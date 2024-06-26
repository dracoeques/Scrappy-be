import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import ScienceAndTech from "../../../models/scienceAndTech.js";

const engadget = {
  name: "engadget",
  Model: ScienceAndTech,
  url: "https://www.engadget.com/",
  linkSelector: ["article a"],
  articleSelectors: {
    titleSelector: ["h1"],
    dateSelector: ["[data-component='HorizontalAuthorInfo'] span:nth-child(3)"],
    contentSelector: ["h2"],
    articleContentSelector: [
      "[data-component='ArticleBody'] p",
      "[data-component='ArticleBody'] h1",
      "[data-component='ArticleBody'] h2",
      "[data-component='ArticleBody'] h3",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: engadget,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default engadget;
