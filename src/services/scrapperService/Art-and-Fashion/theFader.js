import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ArtAndFashion from "../../../models/artAndFashion.js";

const theFader = {
  name: "theFader",
  Model: ArtAndFashion,
  url: ["https://theFader.com/"],
  linkSelector: [".permalink"],
  articleSelectors: {
    titleSelector: ["h1"],
    dateSelector: [".posted", "time"],
    contentSelector: [".deck", "h2"],
    articleContentSelector: [
      ".paragraph_wrapper p",
      ".paragraph_wrapper h2",
      ".paragraph_wrapper h3",
      ".paragraph_wrapper h4",
      ".paragraph_wrapper h5",
      ".paragraph_wrapper h6",
      ".paragraph_wrapper ul",
    ],
  },
  selectorWaitTime: 4000,
};

export const getNews = async () => {
  const res = await singleScrape({
    article: theFader,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: theFader,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default theFader;
