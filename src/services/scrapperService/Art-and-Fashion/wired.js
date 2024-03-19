import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import ArtAndFashion from "../../../models/artAndFashion.js";

const wired = {
  name: "wired",
  Model: ArtAndFashion,
  url: ["https://www.wired.com/category/culture/"],
  linkSelector: [".SummaryItemHedLink-civMjp", ".BaseWrap-sc-gjQpdd"],
  articleSelectors: {
    titleSelector: ["[data-testid='ContentHeaderHed']"],
    dateSelector: ["time"],
    contentSelector: [".ContentHeaderDek-bIqFFZ"],
    articleContentSelector: [".body__inner-container p"],
  },
};
export const getNews = async () => {
  const res = await singleScrape({
    article: wired,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: wired,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default wired;
