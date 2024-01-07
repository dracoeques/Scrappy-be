import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Politics from "../../../models/politics.js";

const motherJones = {
  name: "motherJones",
  Model: Politics,
  url: "https://www.motherjones.com/",
  linkSelector: ["a[data-ga-category='Homepage']"],
  articleSelectors: {
    titleSelector: [".entry-title"],
    dateSelector: [".dateline"],
    contentSelector: [".dek"],
    articleContentSelector: [
      ".entry-content p",
      ".entry-content h1",
      ".entry-content h2",
      ".entry-content h3",
      ".entry-content h4",
      ".entry-content h5",
      ".entry-content h6",
      ".entry-content ul",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: motherJones,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default motherJones;
