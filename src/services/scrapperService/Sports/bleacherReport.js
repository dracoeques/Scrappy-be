import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Sports from "../../../models/sports.js";

const bleacherReport = {
  name: "bleacherReport",
  Model: Sports,
  url: "https://bleacherreport.com/",
  linkSelector: ["a.articleTitle", "a.track", "a.atom article-card"],
  articleSelectors: {
    titleSelector: ["header h1"],
    dateSelector: ["header"],
    contentSelector: [".organism p"],
    articleContentSelector: [".organism p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: bleacherReport,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default bleacherReport;
