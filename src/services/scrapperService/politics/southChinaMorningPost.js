import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import Politics from "../../../models/politics.js";

const southChinaMorningPost = {
  name: "southChinaMorningPost",
  Model: Politics,
  url: "https://www.scmp.com/",
  linkSelector: [
    ".article-title__article-link",
    ".article__link",
    ".headline--link",
    ".item-cell__link ",
    ".signature-item__cover-link",
  ],
  articleSelectors: {
    titleSelector: ".headline",
    dateSelector: ["time", ".c-timestamp"],
    contentSelector: ".generic-article__summary--ul",
    articleContentSelector: [
      ".details__body p",
      ".generic-article__body",
      ".article-details-type--p",
      ".content--p",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: southChinaMorningPost,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default southChinaMorningPost;
