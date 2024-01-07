import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ScienceAndTech from "../../../models/scienceAndTech.js";

const science = {
  name: "science",
  Model: ScienceAndTech,
  url: "https://www.science.org/news",
  linkSelector: [".card-header a"],
  articleSelectors: {
    titleSelector: [".news-article__hero__title"],
    dateSelector: [".news-article__hero__date"],
    contentSelector: [".news-article__hero__subtitle"],
    articleContentSelector: [
      ".bodySection p",
      ".bodySection h2",
      ".bodySection h3",
      ".bodySection h4",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: science,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default science;
