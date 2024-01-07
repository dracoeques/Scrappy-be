import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import LawAndCrime from "../../../models/lawAndCrime.js";

const justia = {
  name: "justia",
  Model: LawAndCrime,
  url: "https://www.justia.com/",
  linkSelector: [".col--one-half a"],
  articleSelectors: {
    titleSelector: [".heading-1", "h1"],
    dateSelector: [".article-by-line", "time"],
    contentSelector: ["#complementary p", ".set-maxlimit p"],
    articleContentSelector: [
      "#complementary p",
      "#complementary h2",
      "#complementary h3",
      "#complementary h4",
      "#complementary h5",
      ".set-maxlimit p",
      ".set-maxlimit h2",
      ".set-maxlimit h3",
      ".set-maxlimit h4",
      ".set-maxlimit h5",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: justia,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default justia;
