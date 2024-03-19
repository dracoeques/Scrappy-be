import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ScienceAndTech from "../../../models/scienceAndTech.js";

const geekWire = {
  name: "geekWire",
  Model: ScienceAndTech,
  url: "https://www.geekwire.com/",
  linkSelector: [".headline", ".entry-title a"],
  articleSelectors: {
    titleSelector: [".entry-title", "h1"],
    dateSelector: ["time?datetime"],
    contentSelector: [".entry-content p"],
    articleContentSelector: [
      ".entry-content p",
      ".entry-content h2",
      ".entry-content h3",
      ".entry-content h4",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: geekWire,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default geekWire;
