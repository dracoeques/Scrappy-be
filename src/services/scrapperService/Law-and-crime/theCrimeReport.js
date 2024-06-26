import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import LawAndCrime from "../../../models/lawAndCrime.js";

const theCrimeReport = {
  name: "theCrimeReport",
  Model: LawAndCrime,
  url: "https://thecrimereport.org/",
  linkSelector: [".post-title a"],
  articleSelectors: {
    titleSelector: [".post-title", "h1"],
    dateSelector: [".article-by-line", "time"],
    contentSelector: [".post-content p"],
    articleContentSelector: [
      ".post-content p",
      ".post-content h2",
      ".post-content h3",
      ".post-content h4",
      ".post-content h5",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: theCrimeReport,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default theCrimeReport;
