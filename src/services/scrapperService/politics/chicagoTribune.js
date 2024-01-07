import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import Politics from "../../../models/politics.js";

const chicagoTribune = {
  name: "chicagoTribune",
  Model: Politics,
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
  if (isEntryFile)
    await singleScrape({
      article: chicagoTribune,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default chicagoTribune;
