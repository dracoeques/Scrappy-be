import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ScienceAndTech from "../../../models/scienceAndTech.js";

const techRadar = {
  name: "techRadar",
  Model: ScienceAndTech,
  url: "https://www.techradar.com/",
  linkSelector: [".wcl-item-right a", ".wdn-listv2-item-link"],
  articleSelectors: {
    titleSelector: ["header h1"],
    dateSelector: ["time?datetime"],
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
