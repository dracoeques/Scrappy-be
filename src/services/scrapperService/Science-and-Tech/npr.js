import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ScienceAndTech from "../../../models/scienceAndTech.js";

const npr = {
  name: "npr",
  Model: ScienceAndTech,
  url: ["https://www.npr.org/sections/research-news/"],
  linkSelector: ["h2 a"],
  articleSelectors: {
    titleSelector: [".storytitle"],
    dateSelector: [".date"],
    contentSelector: [".storytext p"],
    articleContentSelector: [
      ".storytext p",
      ".storytext h1",
      ".storytext h2",
      ".storytext h3",
      ".storytext h4",
      ".storytext h5",
      ".storytext h6",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: npr,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default npr;
