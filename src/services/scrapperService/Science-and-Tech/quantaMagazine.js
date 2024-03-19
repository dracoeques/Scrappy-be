import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ScienceAndTech from "../../../models/scienceAndTech.js";

const quantaMagazine = {
  name: "quantaMagazine",
  Model: ScienceAndTech,
  url: "https://www.quantamagazine.org/",
  linkSelector: [".card__content > a", ".card-list__content a"],
  articleSelectors: {
    titleSelector: [".post__title__title", "h1"],
    dateSelector: [".pv025"],
    contentSelector: [".post__title__excerpt"],
    articleContentSelector: [
      ".post__content p",
      ".post__content h2",
      ".post__content h3",
      ".post__content h4",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: quantaMagazine,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default quantaMagazine;
