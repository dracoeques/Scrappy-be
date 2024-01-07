import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Gaming from "../../../models/gaming.js";

const gameSpot = {
  name: "gameSpot",
  Model: Gaming,
  url: "https://www.gamespot.com/",
  linkSelector: [".js-click-tag"],
  articleSelectors: {
    titleSelector: [".highend-content-title", "h1"],
    dateSelector: ["time"],
    contentSelector: [".news-deck"],
    articleContentSelector: [".js-content-entity-body p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: gameSpot,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default gameSpot;
