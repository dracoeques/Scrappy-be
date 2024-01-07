import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import Sports from "../../../models/sports.js";

const nhkSports = {
  name: "nhkSports",
  Model: Sports,
  url: "https://www3.nhk.or.jp/nhkworld/en/news/tags/29/",
  linkSelector: [
    ".c-mainSectionArticle__title a",
    ".c-article__title a",
    ".c-articleMedia a",
  ],
  articleSelectors: {
    titleSelector: [".p-article2__title"],
    dateSelector: [".p-article__date", ".c-article__date"],
    contentSelector: [".p-article__body p"],
    articleContentSelector: [".p-article__body p"],
  },
  articlesWaitUntil: "networkidle2",
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: nhkSports,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default nhkSports;
