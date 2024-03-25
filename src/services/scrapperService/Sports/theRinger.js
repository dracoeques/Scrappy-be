import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Entertainment from "../../../models/entertainment.js";

const theRinger = {
  name: "theRinger",
  Model: Entertainment,
  url: "https://www.theringer.com/",
  linkSelector: ["h2 a", "h3 a"],
  articleSelectors: {
    titleSelector: [".c-page-title"],
    dateSelector: ["time?datetime"],
    contentSelector: [".c-entry-summary p-dek"],
    articleContentSelector: [
      ".c-entry-content p",
      ".c-entry-content h2",
      ".c-entry-content h3",
      ".c-entry-content h4",
      ".c-entry-content h5",
    ],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: theRinger,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: theRinger,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default theRinger;
