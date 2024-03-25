import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Entertainment from "../../../models/entertainment.js";

const collider = {
  name: "collider",
  Model: Entertainment,
  url: "https://collider.com/",
  linkSelector: ["h3 a", "h5 a"],
  articleSelectors: {
    titleSelector: [".heading_title"],
    dateSelector: ["time?datetime"],
    contentSelector: [".custom_block-content ul"],
    articleContentSelector: [
      ".content-block-regular p",
      ".content-block-regular h2",
      ".content-block-regular h3",
    ],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: collider,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: collider,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default collider;
