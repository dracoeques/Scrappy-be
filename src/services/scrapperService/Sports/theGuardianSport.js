import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import Sports from "../../../models/sports.js";

const theGuardianSport = {
  name: "theGuardianSport",
  Model: Sports,
  url: [
    "https://www.theguardian.com/uk/sport",
    "https://www.theguardian.com/us/sport",
  ],
  linkSelector: [".dcr-lv2v9o"],
  articleSelectors: {
    titleSelector: [".dcr-1nlcpoh", "h1"],
    dateSelector: [".dcr-u0h1qy", ".dcr-1vmj0r"],
    contentSelector: [".dcr-95in8m"],
    articleContentSelector: [".article-body-viewer-selector p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: theGuardianSport,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default theGuardianSport;
