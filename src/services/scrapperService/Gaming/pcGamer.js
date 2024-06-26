import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Gaming from "../../../models/gaming.js";

const pcGamer = {
  name: "pcGamer",
  Model: Gaming,
  url: "https://www.pcgamer.com/",
  linkSelector: [".article-link"],
  articleSelectors: {
    titleSelector: ["header h1"],
    dateSelector: ["time"],
    contentSelector: ["header h2"],
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
      article: pcGamer,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default pcGamer;
