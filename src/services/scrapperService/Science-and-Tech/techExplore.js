import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ScienceAndTech from "../../../models/scienceAndTech.js";

const techExplore = {
  name: "techExplore",
  Model: ScienceAndTech,
  url: "https://techxplore.com/",
  linkSelector: [".news-link", "article a"],
  articleSelectors: {
    titleSelector: [".text-extra-large", "h1"],
    dateSelector: [".article__info-item p"],
    contentSelector: [".news-article p"],
    articleContentSelector: [
      ".news-article p",
      ".news-article h2",
      ".news-article h3",
      ".news-article h4",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: techExplore,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default techExplore;
