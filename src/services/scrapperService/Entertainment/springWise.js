import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Entertainment from "../../../models/entertainment.js";

const springwise = {
  name: "springwise",
  Model: Entertainment,
  url: "https://www.springwise.com/",
  linkSelector: [".pp-post-grid__link"],
  articleSelectors: {
    titleSelector: [".sw-article__header h2"],
    dateSelector: [".sw-article__date"],
    contentSelector: [".sw-article__summary"],
    articleContentSelector: [
      ".sw-article__body p",
      ".sw-article__body h2",
      ".sw-article__body h3",
    ],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: springwise,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: springwise,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default springwise;
