import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import BizAndFinance from "../../../models/bizAndFinance.js";

const cnbc = {
  name: "cnbc",
  Model: BizAndFinance,
  url: "https://www.cnbc.com/world/",
  linkSelector: [".RiverHeadline-headline > a"],
  articleSelectors: {
    titleSelector: [".LiveBlogHeader-headline", ".ArticleHeader-headline"],
    dateSelector: ["time"],
    contentSelector: [".ArticleBody-articleBody p"],
    articleContentSelector: [
      ".FeaturedContent-articleBody p",
      ".FeaturedContent-articleBody h2",
      ".LiveBlogBody-articleBody p",
      ".ArticleBody-articleBody p",
    ],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: cnbc,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: cnbc,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default cnbc;
