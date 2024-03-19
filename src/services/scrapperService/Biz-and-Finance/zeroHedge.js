import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import BizAndFinance from "../../../models/bizAndFinance.js";

const zeroHedge = {
  name: "zeroHedge",
  Model: BizAndFinance,
  url: ["https://www.zerohedge.com/"],
  linkSelector: ["h2 a"],
  articleSelectors: {
    titleSelector: ["h1"],
    dateSelector: [".ContributorArticleFull_headerFooter__date__Tg6yB"],
    contentSelector: [".NodeContent_body__HBEFs p"],
    articleContentSelector: [
      ".NodeContent_body__HBEFs p",
      ".NodeContent_body__HBEFs h1",
      ".NodeContent_body__HBEFs h2",
      ".NodeContent_body__HBEFs h3",
      ".NodeContent_body__HBEFs h4",
      ".NodeContent_body__HBEFs h5",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: zeroHedge,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default zeroHedge;
