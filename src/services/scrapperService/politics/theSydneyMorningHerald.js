import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import Politics from "../../../models/politics.js";

const theSydneyMorningHerald = {
  name: "theSydneyMorningHerald",
  Model: Politics,
  url: "https://www.smh.com.au/",
  linkSelector: ['[data-testid="article-link"]'],
  articleSelectors: {
    titleSelector: "[data-testid='headline']",
    dateSelector: ["time", '[data-testid="datetime"]'],
    contentSelector: "[data-testid='body-content'] p",
    articleContentSelector: ["[data-testid='body-content'] p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: theSydneyMorningHerald,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default theSydneyMorningHerald;
