import { getArticles } from "../../../utils/scrapper/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

const sputnikNews = {
  name: "sputnikNews",
  saveDir: "politics",
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
  if (isEntryFile) await getArticles(sputnikNews);
})();

export default sputnikNews;
