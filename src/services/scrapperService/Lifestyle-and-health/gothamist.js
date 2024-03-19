import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import LifestyleAndHealth from "../../../models/lifestyleAndHealth.js";

const gothamist = {
  name: "gothamist",
  Model: LifestyleAndHealth,
  url: "https://gothamist.com/",
  linkSelector: [".card-title-link"],
  articleSelectors: {
    titleSelector: ["h1"],
    dateSelector: [".date-published"],
    contentSelector: [".streamfield-paragraph p"],
    articleContentSelector: [
      ".streamfield-paragraph p",
      ".streamfield-paragraph h2",
      ".streamfield-paragraph h3",
      ".streamfield-paragraph h4",
      ".streamfield-paragraph h5",
      ".streamfield-paragraph h6",
      ".streamfield-paragraph ul",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: gothamist,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default gothamist;
