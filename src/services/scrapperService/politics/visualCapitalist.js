import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Politics from "../../../models/politics.js";

const visualCapitalist = {
  name: "visualCapitalist",
  Model: Politics,
  url: "https://www.visualcapitalist.com/",
  linkSelector: ["[rel='bookmark']"],
  articleSelectors: {
    titleSelector: [".entry-title"],
    dateSelector: ["time"],
    contentSelector: ["#mvp-content-main p"],
    articleContentSelector: ["#mvp-content-main p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: visualCapitalist,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default visualCapitalist;
