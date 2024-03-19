import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ScienceAndTech from "../../../models/scienceAndTech.js";

const bbc = {
  name: "bbc",
  Model: ScienceAndTech,
  url: "https://www.bbc.com/sport",
  linkSelector: [".exn3ah91"],
  articleSelectors: {
    titleSelector: [".qa-story-headline"],
    dateSelector: ["time?datetime", ".qa-status-date-output"],
    contentSelector: [".qa-introduction"],
    articleContentSelector: [".qa-story-body p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: bbc,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default bbc;
