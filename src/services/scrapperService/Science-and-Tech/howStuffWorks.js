import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ScienceAndTech from "../../../models/scienceAndTech.js";

const howStuffWorks = {
  name: "howStuffWorks",
  Model: ScienceAndTech,
  url: ["https://www.howstuffworks.com/"],
  linkSelector: [".animated-underline"],
  articleSelectors: {
    titleSelector: ["h1"],
    dateSelector: [".content-date"],
    contentSelector: [".editorial-body p"],
    articleContentSelector: [".editorial-body p"],
  },
  selectorWaitTime: 2000,
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: howStuffWorks,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default howStuffWorks;
