import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ArtAndFashion from "../../../models/artAndFashion.js";

const bussinessOfFashion = {
  name: "bussinessOfFashion",
  Model: ArtAndFashion,
  url: ["https://www.businessoffashion.com/"],
  linkSelector: [
    ".headline-list-anchor",
    "..results-list--headline-container a:nth-child(2)",
    ".promo-headline a",
  ],
  articleSelectors: {
    titleSelector: ["h1[data-test='article-title']"],
    dateSelector: ["time?datetime"],
    contentSelector: ["[data-test='article-dek']"],
    articleContentSelector: [
      ".default__ArticleBody-sc-1pd0m4y-3 p",
      ".default__ArticleBody-sc-1pd0m4y-3 h2",
      ".default__ArticleBody-sc-1pd0m4y-3 h3",
      ".default__ArticleBody-sc-1pd0m4y-3 h4",
      ".default__ArticleBody-sc-1pd0m4y-3 h5",
      ".default__ArticleBody-sc-1pd0m4y-3 h6",
      ".default__ArticleBody-sc-1pd0m4y-3 ul",
    ],
  },
  selectorWaitTime: 4000,
};

export const getNews = async () => {
  const res = await singleScrape({
    article: bussinessOfFashion,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: bussinessOfFashion,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default bussinessOfFashion;
