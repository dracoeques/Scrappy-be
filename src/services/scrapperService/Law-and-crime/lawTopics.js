import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import LawAndCrime from "../../../models/lawAndCrime.js";

const lawTopics = {
  name: "lawTopics",
  Model: LawAndCrime,
  url: [
    "https://www.law.com/topics/legal-technology/",
    "https://www.law.com/topics/law-firm-management/",
    "https://www.law.com/topics/litigation/",
  ],
  linkSelector: ["h4 a"],
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
      article: lawTopics,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default lawTopics;
