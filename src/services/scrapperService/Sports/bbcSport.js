import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Sports from "../../../models/sports.js";

const bbcSport = {
  name: "bbcSport",
  Model: Sports,
  url: "https://www.bbc.com/sport",
  linkSelector: [".ssrcss-195x479-PromoLink"],
  articleSelectors: {
    titleSelector: [".qa-story-headline"],
    dateSelector: ["header time"],
    contentSelector: [".qa-introduction"],
    articleContentSelector: [".qa-story-body p", ".qa-story-body h3"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: bbcSport,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default bbcSport;
