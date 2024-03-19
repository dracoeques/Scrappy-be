import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ArtAndFashion from "../../../models/artAndFashion.js";

const xxlmag = {
  name: "xxlmag",
  Model: ArtAndFashion,
  url: ["https://www.xxlmag.com/"],
  linkSelector: [".theframe"],
  articleSelectors: {
    titleSelector: [".title", "h1"],
    dateSelector: ["time?datetime"],
    contentSelector: [".content p"],
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
};

export const getNews = async () => {
  const res = await singleScrape({
    article: xxlmag,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: xxlmag,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default xxlmag;
