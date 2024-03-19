import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ArtAndFashion from "../../../models/artAndFashion.js";

const louderThanWar = {
  name: "louderThanWar",
  Model: ArtAndFashion,
  url: ["https://louderthanwar.com/news/"],
  linkSelector: [".td-image-wrap"],
  articleSelectors: {
    titleSelector: [".entry-title", "h1"],
    dateSelector: ["time"],
    contentSelector: [".bialty-container p"],
    articleContentSelector: [
      ".bialty-container p",
      ".bialty-container h2",
      ".bialty-container h3",
      ".bialty-container h4",
      ".bialty-container h5",
      ".bialty-container h6",
      ".bialty-container ul",
    ],
  },
  selectorWaitTime: 4000,
};

export const getNews = async () => {
  const res = await singleScrape({
    article: louderThanWar,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: louderThanWar,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default louderThanWar;
