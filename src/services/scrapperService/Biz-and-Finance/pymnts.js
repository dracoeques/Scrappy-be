import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import BizAndFinance from "../../../models/bizAndFinance.js";

const pymnts = {
  name: "pymnts",
  Model: BizAndFinance,
  url: ["https://www.pymnts.com/"],
  linkSelector: [".border-bottom.border-light.py-2 a", ".home-mid-lnk a"],
  articleSelectors: {
    titleSelector: ["h1"],
    dateSelector: [
      ".small.muted.text-uppercase.d-block.d-md-inline",
      ".fs-6.text-uppercase.d-block.d-md-inline",
    ],
    contentSelector: [".single p", ".cpi-article p"],
    articleContentSelector: [
      ".single p",
      ".single h1",
      ".single h2",
      ".single h3",
      ".single h4",
      ".single h5",
      ".cpi-article p",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: pymnts,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default pymnts;
