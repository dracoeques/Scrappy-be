import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import ArtAndFashion from "../../../models/artAndFashion.js";

const elle = {
  name: "elle",
  Model: ArtAndFashion,
  url: "https://www.elle.com/",
  linkSelector: [".enk2x9t2"],
  articleSelectors: {
    titleSelector: [".css-1xldvzu", "h1"],
    dateSelector: ["time", ".article-date"],
    contentSelector: [".css-1yuvjqy p"],
    articleContentSelector: [
      ".article-body p",
      ".article-body h2",
      ".article-body h3",
      ".article-body h4",
      ".article-body h5",
      ".article-body h6",
      ".article-body ul",
    ],
  },
};
export const getNews = async () => {
  const res = await singleScrape({
    article: elle,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: elle,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default elle;
