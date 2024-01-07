import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Politics from "../../../models/politics.js";

const allSlides = {
  name: "allSlides",
  Model: Politics,
  url: "https://www.allsides.com/unbiased-balanced-news",
  linkSelector: [
    ".main-link",
    ".happening-now a",
    ".news-item a:not(.source-area)",
  ],
  articleSelectors: {
    titleSelector: [".taxonomy-heading", ".article-name"],
    dateSelector: [".date-display-single", ".article-posted-date"],
    contentSelector: ["[data-element='story-body'] p", ".field-content p"],
    articleContentSelector: [
      ".story-id-page-description p",
      ".story-id-page-description h1",
      ".story-id-page-description h2",
      ".story-id-page-description h3",
      ".story-id-page-description h4",
      ".story-id-page-description h5",
      ".story-id-page-description h6",
      ".story-id-page-description ul",
      ".field-content p",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: allSlides,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default allSlides;
