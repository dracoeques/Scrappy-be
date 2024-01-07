import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Sports from "../../../models/sports.js";

const espn = {
  name: "espn",
  Model: Sports,
  url: "https://www.espn.com/",
  linkSelector: ["a.contentItem__padding"],
  articleSelectors: {
    titleSelector: [".article-header"],
    dateSelector: [".timestamp "],
    contentSelector: [".article p"],
    articleContentSelector: [
      ".article p",
      ".article h1",
      ".article h2",
      ".article h3",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: espn,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default espn;
