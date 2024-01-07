import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Politics from "../../../models/politics.js";

const bbc = {
  name: "bbc",
  Model: Politics,
  url: "https://www.bbc.com/news",
  linkSelector: [".nw-o-link-split__anchor"],
  articleSelectors: {
    titleSelector: "#main-heading",
    dateSelector: "time",
    contentSelector: ".ssrcss-hmf8ql-BoldText",
    articleContentSelector: ".ssrcss-1q0x1qg-Paragraph",
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
