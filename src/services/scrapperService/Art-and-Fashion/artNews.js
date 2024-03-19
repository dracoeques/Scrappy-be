import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ArtAndFashion from "../../../models/artAndFashion.js";

const artNews = {
  name: "artNews",
  Model: ArtAndFashion,
  url: [
    "https://www.artnews.com/c/art-in-america/",
    "https://www.artnews.com/",
  ],
  linkSelector: [".c-title__link"],
  articleSelectors: {
    titleSelector: [".article-title", "h1"],
    dateSelector: ["time", ".c-timestamp"],
    contentSelector: [".summary"],
    articleContentSelector: [
      ".a-content p",
      ".a-content h2",
      ".a-content h3",
      ".a-content h4",
      ".a-content h5",
      ".a-content h6",
      ".a-content ul",
    ],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: artNews,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: artNews,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default artNews;
