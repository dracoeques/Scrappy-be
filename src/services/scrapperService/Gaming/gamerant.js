import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Gaming from "../../../models/gaming.js";

const gameRant = {
  name: "gameRant",
  Model: Gaming,
  url: "https://gamerant.com/",
  linkSelector: [".bc-img-link", ".display-card-title a"],
  articleSelectors: {
    titleSelector: [".heading_title", "h1"],
    dateSelector: ["time"],
    contentSelector: [".heading_excerpt"],
    articleContentSelector: [
      ".article-body p",
      ".article-body h1",
      ".article-body h2",
      ".article-body ul",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: gameRant,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default gameRant;
