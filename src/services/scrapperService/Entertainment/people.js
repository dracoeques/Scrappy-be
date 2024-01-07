import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Entertainment from "../../../models/entertainment.js";

const people = {
  name: "people",
  Model: Entertainment,
  url: "https://people.com/",
  linkSelector: [".mntl-text-link"],
  articleSelectors: {
    titleSelector: [".article-heading"],
    dateSelector: [".mntl-attribution__item-date"],
    contentSelector: [".article-subheading"],
    articleContentSelector: [".mntl-sc-page p", ".mntl-sc-page h2"],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: people,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: people,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default people;
