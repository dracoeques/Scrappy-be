import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ArtAndFashion from "../../../models/artAndFashion.js";

const pitchFork = {
  name: "pitchFork",
  Model: ArtAndFashion,
  url: ["https://pitchfork.com/"],
  linkSelector: [".SummaryItemHedLink-civMjp"],
  articleSelectors: {
    titleSelector: [".ContentHeaderHed-NCyCC"],
    dateSelector: ["time"],
    contentSelector: [".body__inner-container p"],
    articleContentSelector: [
      ".body__inner-container p",
      ".body__inner-container h2",
      ".body__inner-container h3",
      ".body__inner-container h4",
      ".body__inner-container h5",
      ".body__inner-container h6",
      ".body__inner-container ul",
    ],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: pitchFork,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: pitchFork,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default pitchFork;
