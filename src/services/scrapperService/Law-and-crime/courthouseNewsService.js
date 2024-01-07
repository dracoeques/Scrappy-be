import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import LawAndCrime from "../../../models/lawAndCrime.js";

const courthouseNewsService = {
  name: "courthouseNewsService",
  Model: LawAndCrime,
  url: "https://www.courthousenews.com/",
  linkSelector: [".headline a"],
  articleSelectors: {
    titleSelector: ["h1"],
    dateSelector: ["time", ".author-date span"],
    contentSelector: [".excerpt"],
    articleContentSelector: [
      ".article-content p",
      ".article-content h2",
      ".article-content h3",
      ".article-content h4",
      ".article-content h5",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: courthouseNewsService,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default courthouseNewsService;
