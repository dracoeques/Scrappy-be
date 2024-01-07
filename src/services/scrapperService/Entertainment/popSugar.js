import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Entertainment from "../../../models/entertainment.js";

const popSugar = {
  name: "popSugar",
  Model: Entertainment,
  url: "https://www.popsugar.com/",
  linkSelector: ["a.post-title", "a.channel-ps-homepage-featured-post"],
  articleSelectors: {
    titleSelector: [".post-title"],
    dateSelector: ["time"],
    contentSelector: [".highlightable p"],
    articleContentSelector: [".highlightable p"],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: popSugar,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: popSugar,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default popSugar;
