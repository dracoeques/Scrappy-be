import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import BizAndFinance from "../../../models/bizAndFinance.js";

const dw = {
  name: "dw",
  Model: BizAndFinance,
  url: "https://www.dw.com/en/top-stories/s-9097",
  linkSelector: [".teaser-data .eSwfXC"],
  articleSelectors: {
    titleSelector: [".gdCDMT"],
    dateSelector: ["time"],
    contentSelector: [".teaser-text"],
    articleContentSelector: [".rich-text p"],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: dw,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: dw,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default dw;
