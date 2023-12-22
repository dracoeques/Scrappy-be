import { getArticles } from "../../../utils/scrapper/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import ScienceAndTech from "../../../models/scienceAndTech.js";

const yahooTech = {
  name: "yahooTech",
  Model: ScienceAndTech,
  url: "https://news.yahoo.com/science/",
  linkSelector: ['[data-test-locator="stream-item-title"] a'],
  articleSelectors: {
    titleSelector: [".caas-title-wrapper h1"],
    dateSelector: ["time"],
    contentSelector: [".caas-body p"],
    articleContentSelector: [".caas-body p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(yahooTech);
})();

export default yahooTech;
