import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import LawAndCrime from "../../../models/lawAndCrime.js";

const theBureauInvestigates = {
  name: "theBureauInvestigates",
  Model: LawAndCrime,
  url: "https://www.thebureauinvestigates.com/",
  linkSelector: [".tb-c-story-preview"],
  articleSelectors: {
    titleSelector: [".tb-c-story-header__title"],
    dateSelector: [".tb-c-crumbs__item--date"],
    contentSelector: [".tb-c-story__body p"],
    articleContentSelector: [
      ".tb-c-story__body p",
      ".tb-c-story__body h2",
      ".tb-c-story__body h3",
      ".tb-c-story__body h4",
      ".tb-c-story__body h5",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: theBureauInvestigates,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default theBureauInvestigates;
