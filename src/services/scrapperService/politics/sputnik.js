import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import Politics from "../../../models/politics.js";

const sputnikNews = {
  name: "sputnikNews",
  Model: Politics,
  url: "https://sputnikglobe.com/",
  linkSelector: [
    ".cell-main-photo__title",
    ".cell-list-f__link",
    ".cell-list__item ",
  ],
  articleSelectors: {
    titleSelector: ".article__title",
    dateSelector: ["[data-unixtime]"],
    contentSelector: ".article__announce-text",
    articleContentSelector: [".article__body .article__text"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: sputnikNews,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default sputnikNews;
