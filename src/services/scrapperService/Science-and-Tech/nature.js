import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ScienceAndTech from "../../../models/scienceAndTech.js";

const nature = {
  name: "nature",
  Model: ScienceAndTech,
  url: ["https://www.nature.com/srep/", "https://www.nature.com/"],
  linkSelector: [".c-card__link"],
  articleSelectors: {
    titleSelector: [".c-article-magazine-title", ".c-article-title"],
    dateSelector: ["time"],
    contentSelector: [".c-article-teaser-text"],
    articleContentSelector: [
      ".c-article-body p",
      ".c-article-body h2",
      ".c-article-body h3",
      ".c-article-body h4",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: nature,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default nature;
