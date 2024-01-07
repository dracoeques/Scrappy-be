import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Politics from "../../../models/politics.js";

const theAmericanConservative = {
  name: "theAmericanConservative",
  Model: Politics,
  url: "https://www.theamericanconservative.com/",
  linkSelector: [".o-post-card__title a"],
  articleSelectors: {
    titleSelector: [".c-hero-article__title"],
    dateSelector: [".o-byline__date-item"],
    contentSelector: [".c-hero-article__excerpt"],
    articleContentSelector: [".c-blog-post__content"],
  },
};
export const getNews = async () => {
  const res = await singleScrape({
    article: theAmericanConservative.js,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: theAmericanConservative,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default theAmericanConservative;
