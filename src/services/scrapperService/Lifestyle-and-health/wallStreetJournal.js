import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import LifestyleAndHealth from "../../../models/lifestyleAndHealth.js";

const wallStreetJournal = {
  name: "wallStreetJournal",
  Model: LifestyleAndHealth,
  url: ["https://www.wsj.com/lifestyle", "https://www.wsj.com/health"],
  linkSelector: ["h3 a"],
  articleSelectors: {
    titleSelector: ["h1"],
    dateSelector: ["time", ".css-1jzm7tb-TimeTag"],
    contentSelector: ["h2"],
    articleContentSelector: [
      "section > p",
      "section > h1",
      "section > h2",
      "section > h3",
      "section > h4",
      "section > h5",
      "section > h6",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: wallStreetJournal,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default wallStreetJournal;
