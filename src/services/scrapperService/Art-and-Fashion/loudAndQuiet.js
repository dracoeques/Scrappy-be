import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ArtAndFashion from "../../../models/artAndFashion.js";

const loudAndQuiet = {
  name: "loudAndQuiet",
  Model: ArtAndFashion,
  url: ["https://www.loudandquiet.com/"],
  linkSelector: ["h3 a"],
  articleSelectors: {
    titleSelector: ["h1"],
    dateSelector: [".datestamp"],
    contentSelector: [".loudandquiet-article__container p"],
    articleContentSelector: [
      ".loudandquiet-article__container p",
      ".loudandquiet-article__container h2",
      ".loudandquiet-article__container h3",
      ".loudandquiet-article__container h4",
      ".loudandquiet-article__container h5",
      ".loudandquiet-article__container h6",
      ".loudandquiet-article__container ul",
    ],
  },
  selectorWaitTime: 4000,
};

export const getNews = async () => {
  const res = await singleScrape({
    article: loudAndQuiet,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: loudAndQuiet,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default loudAndQuiet;
