import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Gaming from "../../../models/gaming.js";

const pocketGamer = {
  name: "pocketGamer",
  Model: Gaming,
  url: "https://www.pocketgamer.com/",
  linkSelector: [".content-block"],
  articleSelectors: {
    titleSelector: ["h1"],
    dateSelector: ["time?datetime"],
    contentSelector: [".highlights li", ".body-copy p"],
    articleContentSelector: [".body-copy p", ".body-copy blockquote"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: pocketGamer,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default pocketGamer;
