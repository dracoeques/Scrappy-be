import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import ScienceAndTech from "../../../models/scienceAndTech.js";

const theVerge = {
  name: "theVerge",
  Model: ScienceAndTech,
  url: "https://www.theverge.com/",
  linkSelector: ["h2 a"],
  articleSelectors: {
    titleSelector: [".duet--article--lede > h1"],
    dateSelector: ["time"],
    contentSelector: ["span > h2.inline"],
    articleContentSelector: [
      ".duet--article--article-body-component-container p",
      ".duet--article--article-body-component-container ul",
    ],
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
