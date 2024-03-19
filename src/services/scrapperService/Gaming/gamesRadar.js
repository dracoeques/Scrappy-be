import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Gaming from "../../../models/gaming.js";

const gamesRadar = {
  name: "gamesRadar",
  Model: Gaming,
  url: "https://www.gamesradar.com/",
  linkSelector: [".article-link"],
  articleSelectors: {
    titleSelector: ["h1"],
    dateSelector: ["time?datetime"],
    contentSelector: [".strapline"],
    articleContentSelector: ["#article-body p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: gamesRadar,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default gamesRadar;
