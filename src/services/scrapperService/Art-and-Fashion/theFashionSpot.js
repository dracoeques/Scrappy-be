import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ArtAndFashion from "../../../models/artAndFashion.js";

const theFashionSpot = {
  name: "theFashionSpot",
  Model: ArtAndFashion,
  url: ["https://www.thefashionspot.com/"],
  linkSelector: ["h3 a"],
  articleSelectors: {
    titleSelector: [".wp-block-post-title", "h1"],
    dateSelector: ["time"],
    contentSelector: [".entry-content p"],
    articleContentSelector: [
      ".entry-content p",
      ".entry-content h2",
      ".entry-content h3",
      ".entry-content h4",
      ".entry-content h5",
      ".entry-content h6",
      ".entry-content ul",
    ],
  },
  selectorWaitTime: 4000,
};

export const getNews = async () => {
  const res = await singleScrape({
    article: theFashionSpot,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: theFashionSpot,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default theFashionSpot;
