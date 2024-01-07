import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ScienceAndTech from "../../../models/scienceAndTech.js";

const mashable = {
  name: "mashable",
  Model: ScienceAndTech,
  url: "https://mashable.com/",
  linkSelector: ['a[data-ga-item="title"]'],
  articleSelectors: {
    titleSelector: ["header h1"],
    dateSelector: ["time"],
    contentSelector: ["header h1 + div"],
    articleContentSelector: [
      "[data-ga-module='content_body'] p",
      "[data-ga-module='content_body'] h2",
      "[data-ga-module='content_body'] h3",
      "[data-ga-module='content_body'] h4",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: mashable,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default mashable;
