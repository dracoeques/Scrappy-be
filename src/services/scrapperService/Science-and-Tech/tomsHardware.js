import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ScienceAndTech from "../../../models/scienceAndTech.js";

const tomsHardware = {
  name: "tomsHardware",
  Model: ScienceAndTech,
  url: ["https://www.tomshardware.com/"],
  linkSelector: [".article-link"],
  articleSelectors: {
    titleSelector: [".review-title-long", "h1"],
    dateSelector: ["time?datetime"],
    contentSelector: ["h2"],
    articleContentSelector: [
      "#article-body p",
      "#article-body h1",
      "#article-body h2",
      "#article-body h3",
      "#article-body h4",
      "#article-body h5",
      "#article-body h6",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: tomsHardware,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default tomsHardware;
