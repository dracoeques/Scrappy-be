import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Politics from "../../../models/politics.js";

const bloomberg = {
  name: "bloomberg",
  Model: Politics,
  url: [
    "https://www.bloomberg.com/us-politics",
    "https://www.bloomberg.com/uk-politics",
    "https://www.bloomberg.com/americas-politics",
    "https://www.bloomberg.com/europe-politics",
    "https://www.bloomberg.com/asia-politics",
    "https://www.bloomberg.com/middle-east-politics",
  ],
  linkSelector: ["[data-component='headline'] a"],
  articleSelectors: {
    titleSelector: [".HedAndDek_headline-D19MOidHYLI-"],
    dateSelector: ["time"],
    contentSelector: [".HedAndDek_abstract-XX636-2bHQw-"],
    articleContentSelector: [".styles_articleBlur__G34p_ body-content p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: bloomberg,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default bloomberg;
