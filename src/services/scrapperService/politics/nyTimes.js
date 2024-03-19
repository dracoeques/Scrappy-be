import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Politics from "../../../models/politics.js";

const nyTimes = {
  name: "nyTimes",
  Model: Politics,
  url: "https://www.nytimes.com/section/world",
  linkSelector: ["h3 a", ".css-1u3p7j1", ".css-8hzhxf"],
  articleSelectors: {
    titleSelector: ["[data-testid='headline']"],
    dateSelector: ["time", ".date"],
    contentSelector: ["#article-summary"],
    articleContentSelector: ["#story p", "#story h2", "#story h3"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: nyTimes,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default nyTimes;
