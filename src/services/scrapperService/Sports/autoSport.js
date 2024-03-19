import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import Sports from "../../../models/sports.js";

const autoSport = {
  name: "autoSport",
  Model: Sports,
  url: "https://www.autosport.com/",
  linkSelector: ['a[data-entity-type="article"]'],
  articleSelectors: {
    titleSelector: ["h1"],
    dateSelector: ["time?datetime"],
    contentSelector: [".text-article-description", "h2"],
    articleContentSelector: [".ms-article-content p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: autoSport,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default autoSport;
