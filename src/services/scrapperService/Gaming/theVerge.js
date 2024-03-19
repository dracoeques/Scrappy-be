import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Gaming from "../../../models/gaming.js";

const theVerge = {
  name: "theVerge",
  Model: Gaming,
  url: "https://www.theverge.com/games",
  linkSelector: ["h2 a"],
  articleSelectors: {
    titleSelector: ["h1"],
    dateSelector: ["time?datetime"],
    contentSelector: ["h2"],
    articleContentSelector: [".duet--article--article-body-component p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: theVerge,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default theVerge;
