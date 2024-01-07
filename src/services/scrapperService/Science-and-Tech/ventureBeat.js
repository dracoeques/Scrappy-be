import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ScienceAndTech from "../../../models/scienceAndTech.js";

const ventureBeat = {
  name: "ventureBeat",
  Model: ScienceAndTech,
  url: "https://venturebeat.com/",
  linkSelector: [".FeaturedArticles__hero a", ".ArticleListing__title a"],
  articleSelectors: {
    titleSelector: [".article-title"],
    dateSelector: ["time"],
    contentSelector: [".article-content p"],
    articleContentSelector: [
      ".article-content p",
      ".article-content h2",
      ".article-content h3",
      ".article-content h4",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: ventureBeat,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default ventureBeat;
