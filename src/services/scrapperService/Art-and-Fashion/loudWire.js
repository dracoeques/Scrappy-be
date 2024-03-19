import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ArtAndFashion from "../../../models/artAndFashion.js";

const loudWire = {
  name: "loudWire",
  Model: ArtAndFashion,
  url: ["https://loudwire.com/"],
  linkSelector: ["a.title"],
  articleSelectors: {
    titleSelector: [".title", "h1"],
    dateSelector: ["time"],
    contentSelector: [".pod-content > p"],
    articleContentSelector: [
      ".pod-content p",
      ".pod-content h2",
      ".pod-content h3",
      ".pod-content h4",
      ".pod-content h5",
      ".pod-content h6",
      ".pod-content ul",
    ],
  },
  selectorWaitTime: 4000,
};

export const getNews = async () => {
  const res = await singleScrape({
    article: loudWire,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: loudWire,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default loudWire;
