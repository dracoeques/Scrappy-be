import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import LawAndCrime from "../../../models/lawAndCrime.js";

const icij = {
  name: "icij",
  Model: LawAndCrime,
  url: "https://www.icij.org/",
  linkSelector: ["h1 a", "h3 a", ".archive-project-list__article a", ".p-1 a"],
  articleSelectors: {
    titleSelector: [".entry-title"],
    dateSelector: ["time?datetime"],
    contentSelector: [".post-excerpt"],
    articleContentSelector: [
      ".post-content p",
      ".post-content h2",
      ".post-content h3",
      ".post-content h4",
      ".post-content h5",
      ".post-body p",
      ".post-body h2",
      ".post-body h3",
      ".post-body h4",
      ".post-body h5",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: icij,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default icij;
