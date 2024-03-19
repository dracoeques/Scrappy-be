import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ScienceAndTech from "../../../models/scienceAndTech.js";

const inverse = {
  name: "inverse",
  Model: ScienceAndTech,
  url: "https://www.inverse.com/",
  linkSelector: [".sJ3", ".wLh", ".FpW"],
  articleSelectors: {
    titleSelector: [".cS4", "h1"],
    dateSelector: ["time?datetime"],
    contentSelector: [".uRt p"],
    articleContentSelector: [".Afg p", ".Afg h2", ".Afg h3", ".Afg h4"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: inverse,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default inverse;
