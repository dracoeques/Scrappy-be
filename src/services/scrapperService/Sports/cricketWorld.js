import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import Sports from "../../../models/sports.js";

const cricketWorld = {
  name: "cricketWorld",
  Model: Sports,
  url: "https://www.cricketWorld.com/",
  linkSelector: [".col-md-7 a", ".col-md-8 a"],
  articleSelectors: {
    titleSelector: ["h1", ".content-title"],
    dateSelector: [".content-date"],
    contentSelector: [".content-item h2"],
    articleContentSelector: [".content-item p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: cricketWorld,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default cricketWorld;
