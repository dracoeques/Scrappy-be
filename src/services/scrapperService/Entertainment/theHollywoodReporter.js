import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Entertainment from "../../../models/entertainment.js";

const theHollywoodReporter = {
  name: "theHollywoodReporter",
  Model: Entertainment,
  url: [
    "https://www.hollywoodreporter.com/",
    "https://www.hollywoodreporter.com/t/awards/",
    "https://www.hollywoodreporter.com/c/business/",
    "https://www.hollywoodreporter.com/c/movies/",
  ],
  linkSelector: [".c-title__link", ".o-card__content > a"],
  articleSelectors: {
    titleSelector: [".article-title"],
    dateSelector: ["time"],
    contentSelector: [".article-excerpt"],
    articleContentSelector: [".a-content >  p"],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: theHollywoodReporter,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: theHollywoodReporter,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default theHollywoodReporter;
