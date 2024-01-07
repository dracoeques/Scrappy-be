import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import ArtAndFashion from "../../../models/artAndFashion.js";

const refinery29 = {
  name: "refinery29",
  Model: ArtAndFashion,
  url: "https://www.refinery29.com/",
  linkSelector: [".hero-card-full-width a", ".card a"],
  articleSelectors: {
    titleSelector: [".title", "h1"],
    dateSelector: ["time", ".byline"],
    contentSelector: [".section-text"],
    articleContentSelector: [".section-text"],
  },
};
export const getNews = async () => {
  const res = await singleScrape({
    article: refinery29,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: refinery29,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default refinery29;
