import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ScienceAndTech from "../../../models/scienceAndTech.js";

const bbc = {
  name: "bbc",
  Model: ScienceAndTech,
  url: [
    "https://www.bbc.com/future-planet",
    "https://www.bbc.com/news/science_and_environment",
    "https://www.bbc.com/innovation",
  ],
  linkSelector: [".exn3ah91", ".ej9ium92"],
  articleSelectors: {
    titleSelector: ["#main-heading"],
    dateSelector: ["time"],
    contentSelector: [".ssrcss-hmf8ql-BoldText"],
    articleContentSelector: [".ssrcss-1q0x1qg-Paragraph"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: bbc,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default bbc;
