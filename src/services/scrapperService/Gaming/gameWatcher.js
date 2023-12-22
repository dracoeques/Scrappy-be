import { getArticles } from "../../../utils/scrapper/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Gaming from "../../../models/gaming.js";

const gameWatcher = {
  name: "gameWatcher",
  Model: Gaming,
  url: "https://gameWatcher.com/",
  linkSelector: [".home-promo-link", ".featured-block-item", ".list-heading a"],
  articleSelectors: {
    titleSelector: [".page-heading", "h1"],
    dateSelector: ["time"],
    contentSelector: [".news-text p"],
    articleContentSelector: [
      ".news-text p",
      ".news-text h1",
      ".news-text h2",
      ".news-text ul",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(gameWatcher);
})();

export default gameWatcher;
