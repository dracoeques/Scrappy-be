import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
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
  const res = await singleScrape({
    article: koreanHerald,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: koreanHerald,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default koreanHerald;
