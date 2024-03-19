import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ArtAndFashion from "../../../models/artAndFashion.js";

const artForum = {
  name: "artForum",
  Model: ArtAndFashion,
  url: "https://www.artforum.com/",
  linkSelector: ["[data-alias='card__card-title'] a"],
  articleSelectors: {
    titleSelector: ["[data-alias='article-header__headline']", "h1"],
    dateSelector: ["time"],
    contentSelector: ["[data-template='article'] p"],
    articleContentSelector: [
      "[data-template='article'] p",
      "[data-template='article'] h2",
      "[data-template='article'] h3",
      "[data-template='article'] h4",
      "[data-template='article'] h5",
      "[data-template='article'] h6",
      "[data-template='article'] ul",
    ],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: artForum,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: artForum,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default artForum;
