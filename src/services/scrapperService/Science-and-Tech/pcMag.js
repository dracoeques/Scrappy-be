import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ScienceAndTech from "../../../models/scienceAndTech.js";

const pcMag = {
  name: "pcMag",
  Model: ScienceAndTech,
  url: "https://www.pcmag.com/",
  linkSelector: [
    "[data-element='content-title']",
    "[data-element='top-stories-link']",
  ],
  articleSelectors: {
    titleSelector: [".font-featured"],
    dateSelector: [".md\\:ml-4 .font-semibold"],
    contentSelector: [".font-featured + p"],
    articleContentSelector: [
      "#article p",
      "#article h2",
      "#article h3",
      "#article h4",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: pcMag,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default pcMag;
