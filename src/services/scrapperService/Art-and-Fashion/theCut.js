import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import ArtAndFashion from "../../../models/artAndFashion.js";

const theCut = {
  name: "theCut",
  Model: ArtAndFashion,
  url: "https://www.thecut.com/",
  linkSelector: [".link-text", ".article-link", ".feed-link"],
  articleSelectors: {
    titleSelector: [".headline-primary  ", "h1"],
    dateSelector: ["time", ".article-date"],
    contentSelector: [".article-content p"],
    articleContentSelector: [
      ".article-content p",
      ".article-content h2",
      ".article-content h3",
      ".article-content h4",
      ".article-content h5",
      ".article-content h6",
      ".article-content ul",
    ],
  },
};
export const getNews = async () => {
  const res = await singleScrape({
    article: theCut,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: theCut,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default theCut;
