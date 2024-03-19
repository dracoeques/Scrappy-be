import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import ScienceAndTech from "../../../models/scienceAndTech.js";

const newsCenter = {
  name: "newsCenter",
  Model: ScienceAndTech,
  url: "https://newscenter.lbl.gov/ ",
  linkSelector: ["lbl-featured-news", "h2 a"],
  articleSelectors: {
    titleSelector: [".hero-news-post__title", "h1"],
    dateSelector: ["time"],
    contentSelector: [".entry-content p"],
    articleContentSelector: [
      ".entry-content p",
      ".entry-content h2",
      ".entry-content h4",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: newsCenter,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default newsCenter;
