import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import LawAndCrime from "../../../models/lawAndCrime.js";

const buzzfeed = {
  name: "buzzfeed",
  Model: LawAndCrime,
  url: "https://www.buzzfeed.com/investigations",
  linkSelector: [".more-stories__item a", "hgroup a"],
  articleSelectors: {
    titleSelector: [".headline_title__NbsAE", "h1"],
    dateSelector: ["time"],
    contentSelector: [".headline_description__xYhEI"],
    articleContentSelector: [".post_content__w3pdf p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: buzzfeed,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default buzzfeed;
