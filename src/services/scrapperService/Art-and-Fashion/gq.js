import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ArtAndFashion from "../../../models/artAndFashion.js";

const gq = {
  name: "gq",
  Model: ArtAndFashion,
  url: ["https://www.gq.com/"],
  linkSelector: [".summary-item__hed-link"],
  articleSelectors: {
    titleSelector: ["[data-testid='ContentHeaderHed']", "h1"],
    dateSelector: ["time"],
    contentSelector: [".ContentHeaderDek-bIqFFZ"],
    articleContentSelector: [
      ".ArticlePageChunks-fLyCVG p",
      ".ArticlePageChunks-fLyCVG h2",
      ".ArticlePageChunks-fLyCVG h3",
      ".ArticlePageChunks-fLyCVG h4",
      ".ArticlePageChunks-fLyCVG h5",
      ".ArticlePageChunks-fLyCVG h6",
      ".ArticlePageChunks-fLyCVG ul",
    ],
  },
  selectorWaitTime: 4000,
};

export const getNews = async () => {
  const res = await singleScrape({
    article: gq,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: gq,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default gq;
