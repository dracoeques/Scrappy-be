import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import ScienceAndTech from "../../../models/scienceAndTech.js";

const smithsonianMagazine = {
  name: "smithsonianMagazine",
  Model: ScienceAndTech,
  url: "https://www.smithsonianmag.com/",
  linkSelector: ["h3 a", "h2 a"],
  articleSelectors: {
    titleSelector: ["h1", ".headline"],
    dateSelector: ["time"],
    contentSelector: [".subtitle"],
    articleContentSelector: [
      ".articleLeft p",
      ".articleLeft h2",
      ".articleLeft h4",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: smithsonianMagazine,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default smithsonianMagazine;
