import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import LawAndCrime from "../../../models/lawAndCrime.js";

const theAppeal = {
  name: "theAppeal",
  Model: LawAndCrime,
  url: "https://theappeal.org/",
  linkSelector: ["h4 a", "h3 a"],
  articleSelectors: {
    titleSelector: ["h1"],
    dateSelector: ["time?datetime"],
    contentSelector: ["header p"],
    articleContentSelector: [
      ".apl-article__content p",
      ".apl-article__content h2",
      ".apl-article__content h3",
      ".apl-article__content h4",
      ".apl-article__content h5",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: theAppeal,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default theAppeal;
