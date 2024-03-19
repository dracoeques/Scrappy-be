import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ScienceAndTech from "../../../models/scienceAndTech.js";

const zdnet = {
  name: "zdnet",
  Model: ScienceAndTech,
  url: "https://www.zdnet.com/",
  linkSelector: [".c-listingLatest_itemLink"],
  articleSelectors: {
    titleSelector: [".c-contentHeader_headline", "h1"],
    dateSelector: ["time"],
    contentSelector: [".c-contentHeader_description"],
    articleContentSelector: [
      ".c-ShortcodeContent p",
      ".c-ShortcodeContent h2",
      ".c-ShortcodeContent h3",
      ".c-ShortcodeContent h4",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: zdnet,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default zdnet;
