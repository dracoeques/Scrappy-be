import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ScienceAndTech from "../../../models/scienceAndTech.js";

const mitTechnologyReview = {
  name: "mitTechnologyReview",
  Model: ScienceAndTech,
  url: "https://www.technologyreview.com/",
  linkSelector: ["[data-event-category='homepage']"],
  articleSelectors: {
    titleSelector: [".contentArticleHeader__title--rp01p"],
    dateSelector: [".contentArticleHeader__publishDate--goc9R"],
    contentSelector: [".contentArticleHeader__deck--3N9MX"],
    articleContentSelector: [
      ".contentBody__content--1lbXn p",
      ".contentBody__content--1lbXn h2",
      ".contentBody__content--1lbXn h3",
      ".contentBody__content--1lbXn h4",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: mitTechnologyReview,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default mitTechnologyReview;
