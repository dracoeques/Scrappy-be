import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ScienceAndTech from "../../../models/scienceAndTech.js";

const bbcFuture = {
  name: "bbcFuture",
  Model: ScienceAndTech,
  url: ["https://www.bbc.com/future-planet"],
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
  selectorWaitTime: 2000,
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: bbcFuture,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default bbcFuture;
