import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Politics from "../../../models/politics.js";

const proPublica = {
  name: "proPublica",
  Model: Politics,
  url: "https://www.propublica.org/",
  linkSelector: ["h3 a"],
  articleSelectors: {
    titleSelector: [".opener__hed"],
    dateSelector: ["time"],
    contentSelector: [".opener__dek"],
    articleContentSelector: [
      ".article-body p",
      ".article-body h1",
      ".article-body h2",
      ".article-body h3",
      ".article-body h4",
      ".article-body h5",
      ".article-body h6",
      ".article-body ul",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: proPublica,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default proPublica;
