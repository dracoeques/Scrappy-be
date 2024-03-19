import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import Sports from "../../../models/sports.js";

const thrasherMagazine = {
  name: "thrasherMagazine",
  Model: Sports,
  url: "https://www.thrashermagazine.com/",
  linkSelector: [".featured-content .post-title-link"],
  articleSelectors: {
    titleSelector: [".article-title"],
    dateSelector: [".article-date?data-timestamp"],
    contentSelector: [".article-text p"],
    articleContentSelector: [".body-text"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: thrasherMagazine,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default thrasherMagazine;
