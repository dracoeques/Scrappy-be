import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import BizAndFinance from "../../../models/bizAndFinance.js";

const theStreet = {
  name: "theStreet",
  Model: BizAndFinance,
  url: "https://www.thestreet.com/",
  linkSelector: [".m-card--header a"],
  articleSelectors: {
    titleSelector: [".m-detail-header--title"],
    dateSelector: ["time?datetime"],
    contentSelector: [".m-detail-header--dek"],
    articleContentSelector: [".m-detail--body p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: theStreet,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default theStreet;
