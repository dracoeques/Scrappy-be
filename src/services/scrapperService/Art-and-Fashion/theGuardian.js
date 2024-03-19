import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import ArtAndFashion from "../../../models/artAndFashion.js";

const theGuardian = {
  name: "theGuardian",
  Model: ArtAndFashion,
  url: [
    "https://www.theguardian.com/music",
    "https://www.theguardian.com/us/culture",
  ],
  linkSelector: [".dcr-lv2v9o"],
  articleSelectors: {
    titleSelector: [".dcr-1nlcpoh", "h1"],
    dateSelector: [".dcr-u0h1qy"],
    contentSelector: [".dcr-95in8m"],
    articleContentSelector: [".article-body-viewer-selector p"],
  },
};
export const getNews = async () => {
  const res = await singleScrape({
    article: theGuardian,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: theGuardian,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default theGuardian;
