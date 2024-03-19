import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ScienceAndTech from "../../../models/scienceAndTech.js";

const techRepublic = {
  name: "techRepublic",
  Model: ScienceAndTech,
  url: "https://www.techrepublic.com/",
  linkSelector: ["h3 a"],
  articleSelectors: {
    titleSelector: [".article-title"],
    dateSelector: ["time?datetime"],
    contentSelector: [".article-summary"],
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
      article: techRepublic,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default techRepublic;
