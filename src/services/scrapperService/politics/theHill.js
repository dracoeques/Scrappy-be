import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Politics from "../../../models/politics.js";

const theHill = {
  name: "theHill",
  Model: Politics,
  url: "https://thehill.com/",
  linkSelector: ["[data-link-type='content-link']"],
  articleSelectors: {
    titleSelector: [".page-title"],
    dateSelector: [".submitted-by > span"],
    contentSelector: [".caption"],
    articleContentSelector: [".article__text > p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: theHill,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default theHill;
