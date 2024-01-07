import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Gaming from "../../../models/gaming.js";

const kotaku = {
  name: "kotaku",
  Model: Gaming,
  url: "https://kotaku.com/",
  linkSelector: [".dprZcn"],
  articleSelectors: {
    titleSelector: ["header h1"],
    dateSelector: ["time"],
    contentSelector: ["header h2"],
    articleContentSelector: [
      ".js_post-content p",
      ".js_post-content h2",
      ".js_post-content h3",
      ".js_post-content h4",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: kotaku,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default kotaku;
