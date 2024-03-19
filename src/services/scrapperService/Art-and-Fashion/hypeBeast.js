import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ArtAndFashion from "../../../models/artAndFashion.js";

const hypeBeast = {
  name: "hypeBeast",
  Model: ArtAndFashion,
  url: ["https://hypebeast.com/music"],
  linkSelector: ["a.title"],
  articleSelectors: {
    titleSelector: [".post-body-title", "h1"],
    dateSelector: ["time"],
    contentSelector: [".post-body-excerpt"],
    articleContentSelector: [
      ".post-body-article p",
      ".post-body-article h2",
      ".post-body-article h3",
      ".post-body-article h4",
      ".post-body-article h5",
      ".post-body-article h6",
      ".post-body-article ul",
    ],
  },
  selectorWaitTime: 4000,
};

export const getNews = async () => {
  const res = await singleScrape({
    article: hypeBeast,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: hypeBeast,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default hypeBeast;
