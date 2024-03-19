import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Politics from "../../../models/politics.js";

const pewResearch = {
  name: "pewResearch",
  Model: Politics,
  url: "https://www.pewresearch.org/",
  linkSelector: ["h1 a", "h2 a", "h3 a"],
  articleSelectors: {
    titleSelector: [".wp-block-post-title", ".post-header h1"],
    dateSelector: ["time", ".date"],
    contentSelector: [".wp-block-prc-block-subtitle"],
    articleContentSelector: [
      ".post-content p",
      ".post-content h2",
      ".post-content h3",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: pewResearch,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default pewResearch;
