import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ArtAndFashion from "../../../models/artAndFashion.js";

const popMatters = {
  name: "popMatters",
  Model: ArtAndFashion,
  url: ["https://www.popmatters.com/"],
  linkSelector: ["h3 a"],
  articleSelectors: {
    titleSelector: [".entry-title", "h1"],
    dateSelector: [".posts-date"],
    contentSelector: [".post-black-caption"],
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
};

export const getNews = async () => {
  const res = await singleScrape({
    article: popMatters,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: popMatters,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default popMatters;
