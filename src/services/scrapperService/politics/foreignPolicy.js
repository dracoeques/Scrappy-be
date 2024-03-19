import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Politics from "../../../models/politics.js";

const foreignPolicy = {
  name: "foreignPolicy",
  Model: Politics,
  url: "https://foreignpolicy.com/",
  linkSelector: ["a.hed-heading.-excerpt"],
  articleSelectors: {
    titleSelector: ["h1.hed"],
    dateSelector: [".events-header time", ".post-content-main time"],
    contentSelector: ["h2.dek-heading"],
    articleContentSelector: [
      ".content-gated.content-gated--main-article p",
      ".events-content p",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: foreignPolicy,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default foreignPolicy;
