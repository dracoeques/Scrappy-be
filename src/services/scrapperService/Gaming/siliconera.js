import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Gaming from "../../../models/gaming.js";

const siliconera = {
  name: "siliconera",
  Model: Gaming,
  url: "https://www.siliconera.com/",
  linkSelector: [".wp-block-gamurs-article-tile__link"],
  articleSelectors: {
    titleSelector: [".wp-block-gamurs-article-header__content--title", "h1"],
    dateSelector: [
      ".wp-block-gamurs-article-metadata__date-and-time?data-datetime",
    ],
    contentSelector: [".wp-block-gamurs-article-header__content--subtitle"],
    articleContentSelector: [".wp-block-gamurs-article-content p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: siliconera,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default siliconera;
