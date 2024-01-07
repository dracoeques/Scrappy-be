import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Sports from "../../../models/sports.js";

const theAthletic = {
  name: "theAthletic",
  Model: Sports,
  url: "https://theathletic.com/uk/",
  linkSelector: [".MuiLink-root"],
  articleSelectors: {
    titleSelector: [".article-headline h1"],
    dateSelector: [".sc-294a6039-3"],
    contentSelector: [".article-content-container p "],
    articleContentSelector: [".article-content-container p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: theAthletic,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default theAthletic;
