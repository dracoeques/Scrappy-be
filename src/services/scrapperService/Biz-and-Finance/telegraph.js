import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import Politics from "../../../models/politics.js";

const theTelegraph = {
  name: "theTelegraph",
  Model: Politics,
  url: "https://www.telegraph.co.uk/business/",
  linkSelector: [".list-headline__link"],
  articleSelectors: {
    titleSelector: ".e-headline",
    dateSelector: ["time", ".e-published-date"],
    contentSelector: ".e-standfirst",
    articleContentSelector: ".article-body-text  p",
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: theTelegraph,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default theTelegraph;
