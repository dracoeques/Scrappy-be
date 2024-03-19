import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ScienceAndTech from "../../../models/scienceAndTech.js";

const futurity = {
  name: "futurity",
  Model: ScienceAndTech,
  url: "https://www.futurity.org/",
  linkSelector: ["a[title]"],
  articleSelectors: {
    titleSelector: [".heading-primary"],
    dateSelector: [".article-date"],
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
      article: futurity,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default futurity;
