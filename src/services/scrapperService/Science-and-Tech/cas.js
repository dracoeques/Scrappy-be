import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ScienceAndTech from "../../../models/scienceAndTech.js";

const cas = {
  name: "cas",
  Model: ScienceAndTech,
  url: "https://www.cas.org/",
  linkSelector: ["h3 a"],
  articleSelectors: {
    titleSelector: [".heading"],
    dateSelector: ["time?datetime"],
    contentSelector: [".primary-desc p"],
    articleContentSelector: [
      ".primary-desc p",
      ".primary-desc h2",
      ".primary-desc h3",
      ".primary-desc h4",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: cas,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default cas;
