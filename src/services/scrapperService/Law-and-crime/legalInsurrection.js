import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import LawAndCrime from "../../../models/lawAndCrime.js";

const legalInsurrection = {
  name: "legalInsurrection",
  Model: LawAndCrime,
  url: "https://legalinsurrection.com/",
  linkSelector: [".post-title a", ".post_text a"],
  articleSelectors: {
    titleSelector: [".entry_title"],
    dateSelector: [".time", ".author-date span"],
    contentSelector: [".subtitle"],
    articleContentSelector: [
      ".post_text p",
      ".post_text h2",
      ".post_text h3",
      ".post_text h4",
      ".post_text h5",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: legalInsurrection,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default legalInsurrection;
