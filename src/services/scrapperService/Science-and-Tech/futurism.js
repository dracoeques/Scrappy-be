import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import ScienceAndTech from "../../../models/scienceAndTech.js";

const futurism = {
  name: "futurism",
  Model: ScienceAndTech,
  url: "https://futurism.com/",
  linkSelector: ["a[title]"],
  articleSelectors: {
    titleSelector: ["h1"],
    dateSelector: [".divide-futurism div:nth-of-type(2)"],
    contentSelector: ["h2"],
    articleContentSelector: [
      ".post-content p",
      ".post-content h2",
      ".post-content h4",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: futurism,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default futurism;
