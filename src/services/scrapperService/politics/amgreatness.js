import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Politics from "../../../models/politics.js";

const amGreatness = {
  name: "amGreatness",
  Model: Politics,
  url: "https://amgreatness.com/",
  linkSelector: [".hidden a"],
  articleSelectors: {
    titleSelector: ["h1"],
    dateSelector: ["time"],
    contentSelector: [".entry-content p"],
    articleContentSelector: [".entry-content p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: amGreatness,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default amGreatness;
