import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ScienceAndTech from "../../../models/scienceAndTech.js";

const gizChina = {
  name: "gizChina",
  Model: ScienceAndTech,
  url: "https://www.gizchina.com/",
  linkSelector: [".vw-post-box__link"],
  articleSelectors: {
    titleSelector: [".vw-post-title"],
    dateSelector: ["time"],
    contentSelector: [".vw-post-content p"],
    articleContentSelector: [
      ".vw-post-content p",
      ".vw-post-content h2",
      ".vw-post-content h3",
      ".vw-post-content h4",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: gizChina,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default gizChina;
