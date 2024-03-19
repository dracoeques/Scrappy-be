import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ArtAndFashion from "../../../models/artAndFashion.js";

const metalSucks = {
  name: "metalSucks",
  Model: ArtAndFashion,
  url: ["https://metalSucks.com/"],
  linkSelector: [".post-title a"],
  articleSelectors: {
    titleSelector: [".post-title", "h1"],
    dateSelector: ["time"],
    contentSelector: [".post-body p"],
    articleContentSelector: [
      ".post-body p",
      ".post-body h2",
      ".post-body h3",
      ".post-body h4",
      ".post-body h5",
      ".post-body h6",
      ".post-body ul",
    ],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: metalSucks,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: metalSucks,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default metalSucks;
