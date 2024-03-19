import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import BizAndFinance from "../../../models/bizAndFinance.js";

const cnbc = {
  name: "cnbc",
  Model: BizAndFinance,
  url: [
    "https://www.cnbc.com/markets/",
    "https://www.cnbc.com/world/",
    "https://www.cnbc.com/business/",
  ],
  linkSelector: [".RiverHeadline-headline > a", ".Card-titleContainer a"],
  articleSelectors: {
    titleSelector: [
      ".LiveBlogHeader-headline",
      ".ArticleHeader-headline",
      ".ClipPlayer-clipPlayerIntroTitle",
    ],
    dateSelector: [
      "time",
      ".ClipPlayer-clipPlayerIntroTime span span:first-child",
    ],
    contentSelector: [
      ".ArticleBody-articleBody p",
      ".ClipPlayer-clipPlayerIntroSummary",
      ".LiveBlogHeader-explainer p",
    ],
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
