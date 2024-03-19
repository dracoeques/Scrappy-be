import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import ScienceAndTech from "../../../models/scienceAndTech.js";

const mitNews = {
  name: "mitNews",
  Model: ScienceAndTech,
  url: "https://news.mit.edu/",
  linkSelector: ["h3 a"],
  articleSelectors: {
    titleSelector: ["h1", "[itemprop='name headline']"],
    dateSelector: ["time?datetime"],
    contentSelector: [".news-article--dek"],
    articleContentSelector: [
      ".news-article--content--body p",
      ".news-article--content--body h2",
      ".news-article--content--body h4",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: mitNews,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default mitNews;
