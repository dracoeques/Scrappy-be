import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import LifestyleAndHealth from "../../../models/lifestyleAndHealth.js";

const telegraph = {
  name: "telegraph",
  Model: LifestyleAndHealth,
  url: [
    "https://www.telegraph.co.uk/lifestyle/",
    "https://www.telegraph.co.uk/travel/",
  ],
  linkSelector: [".list-headline__link"],
  articleSelectors: {
    titleSelector: ".e-headline",
    dateSelector: ["time", ".e-published-date"],
    contentSelector: ".e-standfirst",
    articleContentSelector: ".article-body-text  p",
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: telegraph,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default telegraph;
