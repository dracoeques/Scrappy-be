import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import Sports from "../../../models/sports.js";

const cyclingNews = {
  name: "cyclingNews",
  Model: Sports,
  url: "https://www.cyclingnews.com/",
  linkSelector: [".wdn-listv2-item-link"],
  articleSelectors: {
    titleSelector: ["h1"],
    dateSelector: ["time?datetime"],
    contentSelector: [".strapline"],
    articleContentSelector: ["#article-body p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: cyclingNews,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default cyclingNews;
