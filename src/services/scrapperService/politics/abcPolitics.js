import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Politics from "../../../models/politics.js";

const abcPolitics = {
  name: "abcPolitics",
  Model: Politics,
  url: "https://abcnews.go.com/Politics",
  linkSelector: [".ContentRoll__Headline .AnchorLink", ".item-label-href"],
  articleSelectors: {
    titleSelector: ["[data-testid='prism-headline'] h1"],
    dateSelector: [".Zdbe", ".TimeStamp__Date"],
    contentSelector: ["[data-testid='prism-headline'] p"],
    articleContentSelector: [
      "article p",
      "article h1",
      "article h2",
      "article h3",
      "article h4",
      "article h5",
      "article h6",
      "article ul",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: abcPolitics,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default abcPolitics;
