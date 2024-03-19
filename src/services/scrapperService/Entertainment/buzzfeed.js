import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Entertainment from "../../../models/entertainment.js";

const buzzfeed = {
  name: "buzzfeed",
  Model: Entertainment,
  url: "https://buzzfeed.com/",
  linkSelector: [".feedItem_textWrapper__S6osO a"],
  articleSelectors: {
    titleSelector: [".headline_title__NbsAE", "h1"],
    dateSelector: ["time"],
    contentSelector: [".headline_description__xYhEI"],
    articleContentSelector: [".post_content__w3pdf p"],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: buzzfeed,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: buzzfeed,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default buzzfeed;
