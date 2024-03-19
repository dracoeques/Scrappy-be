import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ScienceAndTech from "../../../models/scienceAndTech.js";

const pubmed = {
  name: "pubmed",
  Model: ScienceAndTech,
  url: ["https://pubmed.ncbi.nlm.nih.gov/15522037/"],
  linkSelector: ["[data-ga-action='latest']", ".full-docsum a"],
  articleSelectors: {
    titleSelector: [".heading-title"],
    dateSelector: [".cit", "time"],
    contentSelector: [".abstract-content"],
    articleContentSelector: [".abstract-content"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: pubmed,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default pubmed;
