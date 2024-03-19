import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ScienceAndTech from "../../../models/scienceAndTech.js";

const digitalTrends = {
  name: "digitalTrends",
  Model: ScienceAndTech,
  url: "https://www.digitaltrends.com/",
  linkSelector: ["h3 a"],
  articleSelectors: {
    titleSelector: [".b-headline__title", "h1"],
    dateSelector: ["time?datetime"],
    contentSelector: [".h-article-content p"],
    articleContentSelector: [
      ".h-article-content  p",
      ".h-article-content  h2",
      ".h-article-content  h3",
      ".h-article-content  h4",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: digitalTrends,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default digitalTrends;
