import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import ArtAndFashion from "../../../models/artAndFashion.js";

const frieze = {
  name: "frieze",
  Model: ArtAndFashion,
  url: ["https://www.frieze.com/"],
  linkSelector: [".teaser-title a"],
  articleSelectors: {
    titleSelector: [".article-header-title"],
    dateSelector: [".article-header-author-image"],
    contentSelector: [".article-header-headline"],
    articleContentSelector: [".node-content-body-main p"],
  },
};
export const getNews = async () => {
  const res = await singleScrape({
    article: frieze,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: frieze,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default frieze;
