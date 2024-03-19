import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Gaming from "../../../models/gaming.js";

const gamingBolt = {
  name: "gamingBolt",
  Model: Gaming,
  url: "https://gamingbolt.com/",
  linkSelector: ["h3 a", ".post-text a"],
  articleSelectors: {
    titleSelector: [".post-title", "h1"],
    dateSelector: [".tag-date"],
    contentSelector: [".excerpt"],
    articleContentSelector: [".content-area p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: gamingBolt,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default gamingBolt;
