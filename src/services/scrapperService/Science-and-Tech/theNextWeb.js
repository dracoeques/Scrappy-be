import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import ScienceAndTech from "../../../models/scienceAndTech.js";

const theNextWeb = {
  name: "theNextWeb",
  Model: ScienceAndTech,
  url: "https://thenextweb.com/",
  linkSelector: ["h2 a", "h3 a"],
  articleSelectors: {
    titleSelector: [".c-header__heading"],
    dateSelector: ["time"],
    contentSelector: [".c-header__intro"],
    articleContentSelector: [
      ".c-article__main p",
      ".c-article__main h2",
      ".c-article__main h4",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: theNextWeb,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default theNextWeb;
