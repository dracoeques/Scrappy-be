import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import BizAndFinance from "../../../models/bizAndFinance.js";

const reuters = {
  name: "reuters",
  Model: BizAndFinance,
  url: "https://www.reuters.com/world/us/",
  linkSelector: [".media-story-card__headline__tFMEu"],
  articleSelectors: {
    titleSelector: [".heading__heading_3__3aL54"],
    dateSelector: ["time"],
    contentSelector: [".article-body__content__17Yit p"],
    articleContentSelector: [".article-body__content__17Yit p"],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: reuters,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: reuters,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default reuters;
