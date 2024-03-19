import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ArtAndFashion from "../../../models/artAndFashion.js";

const fashionBeans = {
  name: "fashionBeans",
  Model: ArtAndFashion,
  url: ["https://www.fashionbeans.com/"],
  linkSelector: [".td-image-wrap"],
  articleSelectors: {
    titleSelector: [".tdb-title-text", "h1"],
    dateSelector: [".entry-date", "time"],
    contentSelector: [".tdb-block-inner p"],
    articleContentSelector: [
      ".tdb-block-inner p",
      ".tdb-block-inner h2",
      ".tdb-block-inner h3",
      ".tdb-block-inner h4",
      ".tdb-block-inner h5",
      ".tdb-block-inner h6",
      ".tdb-block-inner ul",
    ],
  },
  selectorWaitTime: 4000,
};

export const getNews = async () => {
  const res = await singleScrape({
    article: fashionBeans,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: fashionBeans,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default fashionBeans;
