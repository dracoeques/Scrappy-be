import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Gaming from "../../../models/gaming.js";

const gameInformer = {
  name: "gameInformer",
  Model: Gaming,
  url: "https://www.gameinformer.com/",
  linkSelector: [".page-link"],
  articleSelectors: {
    titleSelector: [".page-title"],
    dateSelector: ["time", ".author-details"],
    contentSelector: ["header h2", ".field--name-body p"],
    articleContentSelector: [
      ".field--name-body p",
      ".field--name-body h2",
      ".field--name-body h3",
      ".field--name-body h4",
      ".field--name-body ul",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: gameInformer,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default gameInformer;
