import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import ScienceAndTech from "../../../models/scienceAndTech.js";

const scienceDaily = {
  name: "scienceDaily",
  Model: ScienceAndTech,
  url: "https://www.sciencedaily.com/",
  linkSelector: [".latest-head a", ".breaking-list a"],
  articleSelectors: {
    titleSelector: [".headline"],
    dateSelector: ["#date_posted"],
    contentSelector: [".lead"],
    articleContentSelector: [
      "#text p",
      "#text h1",
      "#text h2",
      "#text h3",
      "#text h4",
      "#text h5",
      "#text h6",
      "#text ul",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: scienceDaily,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default scienceDaily;
