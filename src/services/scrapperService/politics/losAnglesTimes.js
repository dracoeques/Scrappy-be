import { getArticles } from "../../../utils/scrapper/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Politics from "../../../models/politics.js";

const losAngelesTimes = {
  name: "losAngelesTimes",
  Model: Politics,
  url: "https://www.latimes.com/",
  linkSelector: [".promo-title a"],
  articleSelectors: {
    titleSelector: [".headline"],
    dateSelector: [".published-date-day"],
    contentSelector: ["[data-element='story-body'] p"],
    articleContentSelector: [
      "[data-element='story-body'] p",
      "[data-element='story-body'] h1",
      "[data-element='story-body'] h2",
      "[data-element='story-body'] h3",
      "[data-element='story-body'] h4",
      "[data-element='story-body'] h5",
      "[data-element='story-body'] h6",
      "[data-element='story-body'] ul",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(losAngelesTimes);
})();

export default losAngelesTimes;
