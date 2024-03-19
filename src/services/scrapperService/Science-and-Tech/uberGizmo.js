import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ScienceAndTech from "../../../models/scienceAndTech.js";

const uberGizmo = {
  name: "uberGizmo",
  Model: ScienceAndTech,
  url: "https://www.ubergizmo.com/",
  linkSelector: [".article_card_title a", ".related_story_sidebar_container a"],
  articleSelectors: {
    titleSelector: ["h1"],
    dateSelector: [".byline"],
    contentSelector: [".article p"],
    articleContentSelector: [
      ".article p",
      ".article h2",
      ".article h3",
      ".article h4",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: uberGizmo,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default uberGizmo;
