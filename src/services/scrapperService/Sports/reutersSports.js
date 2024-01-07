import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import Sports from "../../../models/sports.js";

const reutersSports = {
  name: "reutersSports",
  Model: Sports,
  url: "https://www.reuters.com/sports/",
  linkSelector: [".heading__base__2T28j a"],
  articleSelectors: {
    titleSelector: [".article-header__heading__15OpQ h1"],
    dateSelector: ["time"],
    contentSelector: [".article-body__content__17Yit p"],
    articleContentSelector: [".article-body__content__17Yit p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: reutersSports,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default reutersSports;
