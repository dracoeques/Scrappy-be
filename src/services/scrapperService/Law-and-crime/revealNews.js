import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import LawAndCrime from "../../../models/lawAndCrime.js";

const revealNews = {
  name: "revealNews",
  Model: LawAndCrime,
  url: "https://revealnews.org/",
  linkSelector: ["h2 a", "h3 a"],
  articleSelectors: {
    titleSelector: [".entry-title"],
    dateSelector: [".entry-date  "],
    contentSelector: [".newspack-post-subtitle"],
    articleContentSelector: [
      ".entry-content p",
      ".entry-content h2",
      ".entry-content h3",
      ".entry-content h4",
      ".entry-content h5",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: revealNews,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default revealNews;
