import { getArticles } from "../../../utils/scrapper/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Entertainment from "../../../models/entertainment.js";

const koreanHerald = {
  name: "koreanHerald",
  Model: Entertainment,
  url: "https://www.koreaherald.com/",
  linkSelector: [".news_link"],
  articleSelectors: {
    titleSelector: [".news_title_area h1"],
    dateSelector: [".news_date"],
    contentSelector: [".news_title_area h2"],
    articleContentSelector: [".text_box p", ".text_box h2", ".text_box h3"],
  },
};

export const getNews = async () => {
  const res = await getArticles(koreanHerald);
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(koreanHerald);
})();

export default koreanHerald;
