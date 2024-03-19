import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ScienceAndTech from "../../../models/scienceAndTech.js";

const techSpot = {
  name: "techSpot",
  Model: ScienceAndTech,
  url: "https://www.techspot.com/",
  linkSelector: [".featured-posts a", "h2 a"],
  articleSelectors: {
    titleSelector: ["h1"],
    dateSelector: ["time?datetime"],
    contentSelector: [".h2"],
    articleContentSelector: [
      ".articleBody p",
      ".articleBody h2",
      ".articleBody h3",
      ".articleBody h4",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: techSpot,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default techSpot;
