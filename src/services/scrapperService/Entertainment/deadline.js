import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Entertainment from "../../../models/entertainment.js";

const deadline = {
  name: "deadline",
  Model: Entertainment,
  url: "https://deadline.com/",
  linkSelector: [".c-title__link"],
  articleSelectors: {
    titleSelector: [".a-article-grid__header"],
    dateSelector: ["time"],
    contentSelector: [".a-content p"],
    articleContentSelector: [".a-content p"],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: deadline,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: deadline,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default deadline;
