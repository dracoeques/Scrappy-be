import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import BizAndFinance from "../../../models/bizAndFinance.js";

const bloomberg = {
  name: "bloomberg",
  Model: BizAndFinance,
  url: "https://www.bloomberg.com/africa",
  linkSelector: ["[data-component='headline'] > a"],
  articleSelectors: {
    titleSelector: [".headline__699ae8fb"],
    dateSelector: ["time"],
    contentSelector: [".abstract__a20fee61"],
    articleContentSelector: [".body-content > p"],
  },
};
export const getNews = async () => {
  const res = await singleScrape({
    article: bloomberg,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: bloomberg,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default bloomberg;
