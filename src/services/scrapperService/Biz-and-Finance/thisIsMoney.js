import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import BizAndFinance from "../../../models/bizAndFinance.js";

const thisIsMoney = {
  name: "thisIsMoney",
  Model: BizAndFinance,
  url: ["https://www.thisismoney.co.uk/money/index.html"],
  linkSelector: [".article a[itemprop='url']"],
  articleSelectors: {
    titleSelector: ["h1"],
    dateSelector: ["time"],
    contentSelector: [".mol-bullets-with-font"],
    articleContentSelector: [
      "[itemprop='articleBody'] p",
      "[itemprop='articleBody'] h1",
      "[itemprop='articleBody'] h2",
      "[itemprop='articleBody'] h3",
      "[itemprop='articleBody'] h4",
      "[itemprop='articleBody'] h5",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: thisIsMoney,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default thisIsMoney;
