import { getArticles } from "../../../utils/scrapper/get-articles.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

const chicagoTribune = {
  name: "chicagoTribune",
  saveDir: "politics",
  url: "https://www.chicagotribune.com/",
  linkSelector: [".promo-headline a"],
  articleSelectors: {
    titleSelector: ".headline",
    dateSelector: ["time"],
    contentSelector: ".body-paragraph",
    articleContentSelector: ".body-paragraph",
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile) await getArticles(chicagoTribune);
})();

export default chicagoTribune;
