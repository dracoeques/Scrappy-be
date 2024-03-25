import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ArtAndFashion from "../../../models/artAndFashion.js";

const theArtNewspaper = {
  name: "theArtNewspaper",
  Model: ArtAndFashion,
  url: ["https://theArtNewspaper.com/"],
  linkSelector: [".block.text-gray-800"],
  articleSelectors: {
    titleSelector: ["h1"],
    dateSelector: [".font-sans-regular.text-base.leading-tight.inline-block"],
    contentSelector: ["h2"],
    articleContentSelector: [
      ".grid-in-content p",
      ".grid-in-content h2",
      ".grid-in-content h3",
      ".grid-in-content h4",
      ".grid-in-content h5",
      ".grid-in-content h6",
      ".grid-in-content ul",
    ],
  },
  selectorWaitTime: 4000,
};

export const getNews = async () => {
  const res = await singleScrape({
    article: theArtNewspaper,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: theArtNewspaper,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default theArtNewspaper;
