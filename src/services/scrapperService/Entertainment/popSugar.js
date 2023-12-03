import { getArticles } from "../../../utils/scrapper/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Entertainment from "../../../models/entertainment.js";

const popSugar = {
  name: "popSugar",
  Model: Entertainment,
  url: "https://www.popsugar.com/",
  linkSelector: ["a.post-title", "a.channel-ps-homepage-featured-post"],
  articleSelectors: {
    titleSelector: [".post-title"],
    dateSelector: ["time"],
    contentSelector: [".highlightable p"],
    articleContentSelector: [".highlightable p"],
  },
};

export const getNews = async () => {
  const res = await getArticles(popSugar);
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(popSugar);
})();

export default popSugar;
