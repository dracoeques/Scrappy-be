import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import ScienceAndTech from "../../../models/scienceAndTech.js";

const readWrite = {
  name: "readWrite",
  Model: ScienceAndTech,
  url: "https://readwrite.com/",
  linkSelector: [".entry-title a", ".relatedcontent a"],
  articleSelectors: {
    titleSelector: [".entry-title"],
    dateSelector: [".post-cat"],
    contentSelector: [".entry-content p"],
    articleContentSelector: [".entry-content p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: readWrite,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default readWrite;
