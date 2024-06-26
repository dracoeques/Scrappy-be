import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import BizAndFinance from "../../../models/bizAndFinance.js";

const theEconomist = {
  name: "theEconomist",
  Model: BizAndFinance,
  url: "https://www.economist.com/",
  linkSelector: [
    ".css-tati6o a",
    ".css-eo5df6 a",
    ".css-f9lqq0 a",
    ".css-juaghv a",
  ],
  articleSelectors: {
    titleSelector: [".css-1bo5zl0"],
    dateSelector: ["time"],
    contentSelector: [".css-13b9ga2"],
    articleContentSelector: [".article__body-text"],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: theEconomist,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: theEconomist,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default theEconomist;
