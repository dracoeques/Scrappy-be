import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import BizAndFinance from "../../../models/bizAndFinance.js";

const cheddar = {
  name: "cheddar",
  Model: BizAndFinance,
  url: "https://cheddar.com/",
  linkSelector: [".card-container a"],
  articleSelectors: {
    titleSelector: [".article-title"],
    dateSelector: [".timeline"],
    contentSelector: [".article-body .block"],
    articleContentSelector: [".article-body .block"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: cheddar,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default cheddar;
