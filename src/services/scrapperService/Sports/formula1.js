import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import Sports from "../../../models/sports.js";

const formula1 = {
  name: "formula1",
  Model: Sports,
  url: "https://www.formula1.com/",
  linkSelector: ["a.f1-cc"],
  articleSelectors: {
    titleSelector: ["h1"],
    dateSelector: ["time?datetime"],
    contentSelector: [
      ".grid.grid-cols-none.gap-0.relative.z-1.ml-0.pt-10 strong",
    ],
    articleContentSelector: [
      ".grid.grid-cols-none.gap-0.relative.z-1.ml-0.pt-10 p",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: formula1,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default formula1;
