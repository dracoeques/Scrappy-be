import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import Sports from "../../../models/sports.js";

const surferToday = {
  name: "surferToday",
  Model: Sports,
  url: "https://www.surfertoday.com/",
  linkSelector: [".j4z-content-title-container a"],
  articleSelectors: {
    titleSelector: ["h1", ".j4z-news-article-title"],
    dateSelector: [".j4z-news-article-details"],
    contentSelector: [".com-content-article__body h2"],
    articleContentSelector: [
      ".com-content-article__body p",
      ".com-content-article__body h2",
      ".com-content-article__body h3",
      ".com-content-article__body h4",
      ".com-content-article__body h5",
      ".com-content-article__body h6",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: surferToday,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default surferToday;
