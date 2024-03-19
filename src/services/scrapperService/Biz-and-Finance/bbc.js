import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import BizAndFinance from "../../../models/bizAndFinance.js";

const bbc = {
  name: "bbc",
  Model: BizAndFinance,
  url: "https://www.bbc.com/business",
  linkSelector: [".nw-o-link-split__anchor"],
  articleSelectors: {
    titleSelector: "#main-heading",
    dateSelector: ["time", "time?datetime"],
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
