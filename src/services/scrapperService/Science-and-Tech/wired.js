import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import ScienceAndTech from "../../../models/scienceAndTech.js";

const wired = {
  name: "wired",
  Model: ScienceAndTech,
  url: "https://www.wired.com/",
  linkSelector: [".SummaryItemHedLink-civMjp", ".BaseWrap-sc-gjQpdd"],
  articleSelectors: {
    titleSelector: ["[data-testid='ContentHeaderHed']"],
    dateSelector: ["time"],
    contentSelector: [".ContentHeaderDek-bIqFFZ"],
    articleContentSelector: [".body__inner-container p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: wired,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default wired;
