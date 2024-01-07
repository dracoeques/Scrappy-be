import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Politics from "../../../models/politics.js";

const theIntercept = {
  name: "theIntercept",
  Model: Politics,
  url: "https://theintercept.com/",
  linkSelector: [".content-card__link"],
  articleSelectors: {
    titleSelector: [".post__title"],
    dateSelector: ["time"],
    contentSelector: ["h2"],
    articleContentSelector: [
      ".entry-content__content p",
      ".entry-content__content h1",
      ".entry-content__content h2",
      ".entry-content__content h3",
      ".entry-content__content h4",
      ".entry-content__content h5",
      ".entry-content__content h6",
      ".entry-content__content ul",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: theIntercept,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default theIntercept;
