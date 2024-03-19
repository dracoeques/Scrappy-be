import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ScienceAndTech from "../../../models/scienceAndTech.js";

const eurekalert = {
  name: "eurekalert",
  Model: ScienceAndTech,
  url: "https://www.eurekalert.org/",
  linkSelector: ["article a"],
  articleSelectors: {
    titleSelector: [".page_title", "h1"],
    dateSelector: ["time"],
    contentSelector: [".entry p"],
    articleContentSelector: [".entry p", ".entry h2", ".entry h3", ".entry h4"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: eurekalert,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default eurekalert;
