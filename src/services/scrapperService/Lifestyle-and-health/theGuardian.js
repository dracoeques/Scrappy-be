import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import LifestyleAndHealth from "../../../models/lifestyleAndHealth.js";

const theGuardian = {
  name: "theGuardian",
  Model: LifestyleAndHealth,
  url: "https://www.theguardian.com/us/lifeandstyle",
  linkSelector: [".dcr-lv2v9o"],
  articleSelectors: {
    titleSelector: [".dcr-1nlcpoh", "h1"],
    dateSelector: [".dcr-u0h1qy"],
    contentSelector: [".dcr-95in8m"],
    articleContentSelector: [".article-body-viewer-selector p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: theGuardian,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default theGuardian;
