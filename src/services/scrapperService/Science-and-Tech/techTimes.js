import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ScienceAndTech from "../../../models/scienceAndTech.js";

const techTimes = {
  name: "techTimes",
  Model: ScienceAndTech,
  url: "https://www.techtimes.com/",
  linkSelector: ["h5 a", "h4 a", "h2 a"],
  articleSelectors: {
    titleSelector: [".article-header", "h1"],
    dateSelector: ["time?datetime"],
    contentSelector: [".article-body p"],
    articleContentSelector: [
      ".article-body p",
      ".article-body h2",
      ".article-body h3",
      ".article-body h4",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: techTimes,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default techTimes;
