import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ArtAndFashion from "../../../models/artAndFashion.js";

const gorillaVsBear = {
  name: "gorillaVsBear",
  Model: ArtAndFashion,
  url: ["https://www.gorillavsbear.net/"],
  linkSelector: ["a.title"],
  articleSelectors: {
    titleSelector: [".title", "h1"],
    dateSelector: ["time"],
    contentSelector: [".text"],
    articleContentSelector: [
      ".content p",
      ".content h2",
      ".content h3",
      ".content h4",
      ".content h5",
      ".content h6",
      ".content ul",
    ],
  },
  selectorWaitTime: 4000,
};

export const getNews = async () => {
  const res = await singleScrape({
    article: gorillaVsBear,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: gorillaVsBear,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default gorillaVsBear;
