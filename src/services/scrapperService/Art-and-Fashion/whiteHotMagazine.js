import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import ArtAndFashion from "../../../models/artAndFashion.js";

const whiteHotMagazine = {
  name: "whiteHotMagazine",
  Model: ArtAndFashion,
  url: ["https://whitehotmagazine.com/"],
  linkSelector: ["h2 a"],
  articleSelectors: {
    titleSelector: [".wh_article_main_title"],
    dateSelector: [".standard-paragraph", ".p1"],
    contentSelector: [".article_body p"],
    articleContentSelector: [".article_body p"],
  },
};
export const getNews = async () => {
  const res = await singleScrape({
    article: whiteHotMagazine,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: whiteHotMagazine,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default whiteHotMagazine;
