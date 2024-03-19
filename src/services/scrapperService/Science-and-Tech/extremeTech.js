import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ScienceAndTech from "../../../models/scienceAndTech.js";

const extremeTech = {
  name: "extremeTech",
  Model: ScienceAndTech,
  url: "https://www.extremetech.com/",
  linkSelector: ["a.block.w-full", "a.block.py-4"],
  articleSelectors: {
    titleSelector: ["h1"],
    dateSelector: ["time?datetime"],
    contentSelector: [".md\\:text-lg.text-gray-700"],
    articleContentSelector: [
      "section p",
      "section h2",
      "section h3",
      "section h4",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: extremeTech,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default extremeTech;
