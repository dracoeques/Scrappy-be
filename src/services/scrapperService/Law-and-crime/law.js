import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import LawAndCrime from "../../../models/lawAndCrime.js";

const law = {
  name: "law",
  Model: LawAndCrime,
  url: "https://www.law.com/",
  linkSelector: [
    ".articleMain",
    ".sideArticle",
    ".latest-item-title a",
    ".article-title a",
    ".covid-item-title a",
    ".popular-item-container a",
    ".alm-item-title a",
  ],
  articleSelectors: {
    titleSelector: ["h1"],
    dateSelector: [
      "time",
      ".byline .jsx-1189612256:nth-child(3)",
      ".article-publish-date",
    ],
    contentSelector: [".access-body p", ".article-sub-headline"],
    articleContentSelector: [".access-body p", ".access-body h2"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: law,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default law;
