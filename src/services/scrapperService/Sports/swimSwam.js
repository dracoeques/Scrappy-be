import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import Sports from "../../../models/sports.js";

const swimSwam = {
  name: "swimSwam",
  Model: Sports,
  url: "https://swimswam.com/",
  linkSelector: [".item a.thumb"],
  articleSelectors: {
    titleSelector: ["h1"],
    dateSelector: ["#entrymeta p"],
    contentSelector: ["article p"],
    articleContentSelector: ["article p", "article h2"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: swimSwam,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default swimSwam;
