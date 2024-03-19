import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Politics from "../../../models/politics.js";

const breitbart = {
  name: "breitbart",
  Model: Politics,
  url: "https://www.breitbart.com/",
  linkSelector: ["h2 a"],
  articleSelectors: {
    titleSelector: ["h1"],
    dateSelector: ["time"],
    contentSelector: [".entry-content p"],
    articleContentSelector: [".entry-content p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: breitbart,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default breitbart;
