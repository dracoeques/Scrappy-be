import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ScienceAndTech from "../../../models/scienceAndTech.js";

const techRadar = {
  name: "techRadar",
  Model: ScienceAndTech,
  url: "https://www.techradar.com/",
  linkSelector: [".article-link", ".wcl-item-right a"],
  articleSelectors: {
    titleSelector: ["header h1"],
    dateSelector: ["time"],
    contentSelector: [".strapline"],
    articleContentSelector: [
      "#article-body p",
      "#article-body h2",
      "#article-body h3",
      "#article-body h4",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: techRadar,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default techRadar;
