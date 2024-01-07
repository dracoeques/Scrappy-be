import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import Sports from "../../../models/sports.js";

const aljazeeraSports = {
  name: "aljazeeraSports",
  Model: Sports,
  url: "https://www.aljazeera.com/sports/",
  linkSelector: [".gc__title a"],
  articleSelectors: {
    titleSelector: [".article-header h1"],
    dateSelector: [".article-dates"],
    contentSelector: [".article__subhead"],
    articleContentSelector: [".wysiwyg--all-content p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: aljazeeraSports,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default aljazeeraSports;
