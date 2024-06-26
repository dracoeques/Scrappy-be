import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import ArtAndFashion from "../../../models/artAndFashion.js";

const dazed = {
  name: "dazed",
  Model: ArtAndFashion,
  url: "https://www.dazeddigital.com/",
  linkSelector: [
    ".hero",
    ".card",
    ".spotlight-I",
    ".spotlight-II",
    ".spotlight-III",
    ".listing-item__content-primary",
  ],
  articleSelectors: {
    titleSelector: [".title", "h1"],
    dateSelector: ["time", ".byline > span > a > span"],
    contentSelector: [".summary"],
    articleContentSelector: [
      ".embed-content p",
      ".embed-content h2",
      ".embed-content h3",
      ".embed-content h4",
      ".embed-content h5",
      ".embed-content h6",
      ".embed-content ul",
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

export default dazed;
