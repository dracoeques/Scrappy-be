import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Politics from "../../../models/politics.js";

const nbcNews = {
  name: "nbcNews",
  Model: Politics,
  url: [
    "https://www.nbcnews.com/world",
    "https://www.nbcnews.com/politics",
    "https://www.nbcnews.com/",
  ],
  linkSelector: ["h2 a"],
  articleSelectors: {
    titleSelector: [".article-hero-headline__htag", ".showBlog-hero__headline"],
    dateSelector: ["time"],
    contentSelector: [".styles_articleDek__Icz5H"],
    articleContentSelector: [".article-body__content > p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: nbcNews,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default nbcNews;
