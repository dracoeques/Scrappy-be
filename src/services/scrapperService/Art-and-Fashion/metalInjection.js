import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ArtAndFashion from "../../../models/artAndFashion.js";

const metalInjection = {
  name: "metalInjection",
  Model: ArtAndFashion,
  url: ["https://metalInjection.com/"],
  linkSelector: [".zox-art-title a"],
  articleSelectors: {
    titleSelector: [".zox-post-title", "h1"],
    dateSelector: ["time?datetime"],
    contentSelector: [".zox-post-excerpt"],
    articleContentSelector: [
      ".zox-post-body p",
      ".zox-post-body h2",
      ".zox-post-body h3",
      ".zox-post-body h4",
      ".zox-post-body h5",
      ".zox-post-body h6",
      ".zox-post-body ul",
    ],
  },
  articlesWaitUntil: "networkidle0",
};

export const getNews = async () => {
  const res = await singleScrape({
    article: metalInjection,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: metalInjection,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default metalInjection;
