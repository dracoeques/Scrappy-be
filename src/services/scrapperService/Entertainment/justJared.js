import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Entertainment from "../../../models/entertainment.js";

const justJared = {
  name: "justJared",
  Model: Entertainment,
  url: "https://www.justjared.com/",
  linkSelector: [".external"],
  articleSelectors: {
    titleSelector: [".post h1"],
    dateSelector: [".post-date"],
    contentSelector: [".entry p"],
    articleContentSelector: [".entry p"],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: justJared,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: justJared,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default justJared;
