import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Entertainment from "../../../models/entertainment.js";

const theWrap = {
  name: "theWrap",
  Model: Entertainment,
  url: "https://www.thewrap.com/",
  linkSelector: ["h3 a"],
  articleSelectors: {
    titleSelector: ["h1.wp-block-heading", "h1.wp-block-post-title"],
    dateSelector: [".wp-block-post-date time?datetime"],
    contentSelector: ["h3.wp-block-heading", ".wp-block-the-wrap-subhed"],
    articleContentSelector: [
      ".entry-content p",
      ".entry-content h2",
      ".entry-content h3",
    ],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: theWrap,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: theWrap,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default theWrap;
