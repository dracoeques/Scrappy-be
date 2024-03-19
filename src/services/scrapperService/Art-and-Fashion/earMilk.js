import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ArtAndFashion from "../../../models/artAndFashion.js";

const earMilk = {
  name: "earMilk",
  Model: ArtAndFashion,
  url: ["https://earmilk.com/"],
  linkSelector: [".entry-title a"],
  articleSelectors: {
    titleSelector: [".entry-title", "h1"],
    dateSelector: [".meta-date", "time"],
    contentSelector: [".entry-content p"],
    articleContentSelector: [
      ".entry-content p",
      ".entry-content h2",
      ".entry-content h3",
      ".entry-content h4",
      ".entry-content h5",
      ".entry-content h6",
      ".entry-content ul",
    ],
  },
  selectorWaitTime: 4000,
};

export const getNews = async () => {
  const res = await singleScrape({
    article: earMilk,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: earMilk,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default earMilk;
