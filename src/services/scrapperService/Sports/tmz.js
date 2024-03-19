import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Sports from "../../../models/sports.js";

const tmz = {
  name: "tmz",
  Model: Sports,
  url: ["https://www.tmz.com/sports/"],
  linkSelector: [
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
