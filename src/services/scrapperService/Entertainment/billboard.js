import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Entertainment from "../../../models/entertainment.js";

const billboard = {
  name: "billboard",
  Model: Entertainment,
  url: "https://www.billboard.com/",
  linkSelector: [".c-title__link"],
  articleSelectors: {
    titleSelector: [".article-title"],
    dateSelector: ["time"],
    contentSelector: [".article-excerpt"],
    articleContentSelector: [".a-content p"],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: billboard,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: billboard,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default billboard;
