import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Politics from "../../../models/politics.js";

const cnn = {
  name: "cnn",
  Model: Politics,
  url: "https://edition.cnn.com/",
  linkSelector: '[data-link-type="article"]',
  articleSelectors: {
    titleSelector: ".headline__text",
    dateSelector: ".timestamp",
    contentSelector: ".headline__text",
    articleContentSelector: ".paragraph",
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: cnn,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default cnn;
