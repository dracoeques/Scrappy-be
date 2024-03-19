import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import ArtAndFashion from "../../../models/artAndFashion.js";

const bbc = {
  name: "bbc",
  Model: ArtAndFashion,
  url: "https://www.bbc.com/culture",
  linkSelector: [
    ".rectangle-story-item__title",
    ".article-hero__content-title a",
    ".article-title-card-rectangle__link",
  ],
  articleSelectors: {
    titleSelector: [".article-headline__text"],
    dateSelector: ["time", ".author-unit__container span"],
    contentSelector: [".body-text-card p"],
    articleContentSelector: [".body-text-card p"],
  },
};
export const getNews = async () => {
  const res = await singleScrape({
    article: bbc,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: bbc,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default bbc;
