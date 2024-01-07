import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import Sports from "../../../models/sports.js";

const sportsNet = {
  name: "sportsNet",
  Model: Sports,
  url: "https://www.sportsnet.ca/",
  linkSelector: [".content-wrap h3 a", ".headlines-story h4 a"],
  articleSelectors: {
    titleSelector: [".article-title"],
    dateSelector: [".article-publish-date"],
    contentSelector: [".article-body-content p"],
    articleContentSelector: [".article-body-content p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: sportsNet,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default sportsNet;
