import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Entertainment from "../../../models/entertainment.js";

const tmz = {
  name: "tmz",
  Model: Entertainment,
  url: ["https://www.tmz.com/hip-hop/", "https://www.tmz.com/"],
  linkSelector: [
    ".media-list__card-link ",
    ".hero-bar__card-link",
    ".article__header-link",
    ".spotlight__card-link",
  ],
  articleSelectors: {
    titleSelector: [".article__header-title", ".header-title"],
    dateSelector: [".article__published-at"],
    contentSelector: [".article__headline-title"],
    articleContentSelector: [".article__blocks p"],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: tmz,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: tmz,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default tmz;
