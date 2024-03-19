import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import BizAndFinance from "../../../models/bizAndFinance.js";

const investoPaper = {
  name: "investoPaper",
  Model: BizAndFinance,
  url: ["https://www.investopaper.com/"],
  linkSelector: ["h1 a", "h2 a", "h3 a"],
  articleSelectors: {
    titleSelector: [".entry-title"],
    dateSelector: ["pre"],
    contentSelector: [".entry-content p"],
    articleContentSelector: [
      ".entry-content p",
      ".entry-content h1",
      ".entry-content h2",
      ".entry-content h3",
      ".entry-content h4",
      ".entry-content h5",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: investoPaper,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default investoPaper;
