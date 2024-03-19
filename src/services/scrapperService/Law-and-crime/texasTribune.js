import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import LawAndCrime from "../../../models/lawAndCrime.js";

const texasTribune = {
  name: "texasTribune",
  Model: LawAndCrime,
  url: "https://www.texastribune.org/",
  linkSelector: [".c-story-block__headline a"],
  articleSelectors: {
    titleSelector: [".t-headline"],
    dateSelector: ["time?datetime"],
    contentSelector: [".has-text-gray-dark"],
    articleContentSelector: [
      ".story_body p",
      ".story_body h2",
      ".story_body h3",
      ".story_body h4",
      ".story_body h5",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: texasTribune,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default texasTribune;
