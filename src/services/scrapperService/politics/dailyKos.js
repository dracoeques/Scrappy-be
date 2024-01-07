import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Politics from "../../../models/politics.js";

const dailyKos = {
  name: "dailyKos",
  Model: Politics,
  url: "https://www.dailykos.com/",
  articlesWaitUntil: "networkidle2",
  linkSelector: [
    ".stories-grid__story a",
    ".top-news__secondary_news__story a",
    ".top-news__primary_news__story a",
    ".top-news__more_news__story a",
  ],
  articleSelectors: {
    titleSelector: [".story__title"],
    dateSelector: [".story__date--long"],
    contentSelector: [".story__text p"],
    articleContentSelector: [
      ".story__text p",
      ".story__text h1",
      ".story__text h2",
      ".story__text h3",
      ".story__text h4",
      ".story__text h5",
      ".story__text h6",
      ".story__text ul",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: dailyKos,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default dailyKos;
