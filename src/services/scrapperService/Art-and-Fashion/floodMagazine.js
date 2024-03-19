import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ArtAndFashion from "../../../models/artAndFashion.js";

const floodMagazine = {
  name: "floodMagazine",
  Model: ArtAndFashion,
  url: ["https://floodmagazine.com/"],
  linkSelector: [".block-news"],
  articleSelectors: {
    titleSelector: [".title"],
    dateSelector: [".date", "time"],
    contentSelector: [".text"],
    articleContentSelector: [
      "#content p",
      "#content h2",
      "#content h3",
      "#content h4",
      "#content h5",
      "#content h6",
      "#content ul",
    ],
  },
  selectorWaitTime: 4000,
};

export const getNews = async () => {
  const res = await singleScrape({
    article: floodMagazine,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: floodMagazine,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default floodMagazine;
