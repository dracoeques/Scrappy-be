import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ScienceAndTech from "../../../models/scienceAndTech.js";

const space = {
  name: "space",
  Model: ScienceAndTech,
  url: "https://www.space.com/",
  linkSelector: [".article-link"],
  articleSelectors: {
    titleSelector: ["h1"],
    dateSelector: ["time?datetime"],
    contentSelector: [".strapline"],
    articleContentSelector: [
      "#article-body p",
      "#article-body h2",
      "#article-body h3",
      "#article-body h4",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: space,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default space;
