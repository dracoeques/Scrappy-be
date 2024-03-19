import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Politics from "../../../models/politics.js";

const axios = {
  name: "axios",
  Model: Politics,
  url: "https://www.axios.com/",
  linkSelector: [
    "h2 a",
    "[data-cy='big-things-sidebar-title-anchor']",
    "[data-vars-category='latest_stories'].gtmView",
  ],
  articleSelectors: {
    titleSelector: ["[data-cy='story-headline']"],
    dateSelector: ["[data-cy='time-rubric']"],
    contentSelector: [".DraftjsBlocks_draftjs__fm3S2 p"],
    articleContentSelector: [".DraftjsBlocks_draftjs__fm3S2 p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: axios,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default axios;
