import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Politics from "../../../models/politics.js";

const yahooPolitics = {
  name: "yahooPolitics",
  Model: Politics,
  url: "https://news.yahoo.com/politics/",
  linkSelector: [".js-content-viewer"],
  articleSelectors: {
    titleSelector: ["[data-test-locator='headline']"],
    dateSelector: ["time"],
    contentSelector: [".caas-subheadline"],
    articleContentSelector: [".caas-body > p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: yahooPolitics,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default yahooPolitics;
