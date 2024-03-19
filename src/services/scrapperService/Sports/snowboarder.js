import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import Sports from "../../../models/sports.js";

const snowBoarder = {
  name: "snowBoarder",
  Model: Sports,
  url: "https://www.snowboarder.com/",
  linkSelector: [".m-card--content a"],
  articleSelectors: {
    titleSelector: ["h1", ".m-detail-header--title"],
    dateSelector: ["time?datetime"],
    contentSelector: [".m-detail-header--dek"],
    articleContentSelector: [
      ".m-detail--body p",
      ".m-detail--body h2",
      ".m-detail--body h3",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: snowBoarder,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default snowBoarder;
