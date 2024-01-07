import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Entertainment from "../../../models/entertainment.js";

const entertainmentWeekly = {
  name: "entertainmentWeekly",
  Model: Entertainment,
  url: "https://ew.com/",
  linkSelector: [
    ".entityTout__link",
    ".category-page-item-image-text",
    ".elementFont__toutLink",
    ".category-page-item-image-text",
  ],
  articleSelectors: {
    titleSelector: [".headline"],
    dateSelector: [".byline__block--timestamp"],
    contentSelector: [".elementFont__dek--within"],
    articleContentSelector: [".articleContainer__content p"],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: entertainmentWeekly,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: entertainmentWeekly,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default entertainmentWeekly;
