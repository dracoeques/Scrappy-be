import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import LifestyleAndHealth from "../../../models/lifestyleAndHealth.js";

const shape = {
  name: "shape",
  Model: LifestyleAndHealth,
  url: "https://www.shape.com/",
  linkSelector: ["a.card"],
  articleSelectors: {
    titleSelector: [".article-heading"],
    dateSelector: ["time", ".mntl-attribution__item-date"],
    contentSelector: [".structured-content p"],
    articleContentSelector: [
      ".structured-content p",
      ".structured-content h2",
      ".structured-content h3",
      ".structured-content h4",
      ".structured-content h5",
      ".structured-content h6",
      ".structured-content ul",
      ".js-extended-commerce__section p",
      "article p",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: shape,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default shape;
