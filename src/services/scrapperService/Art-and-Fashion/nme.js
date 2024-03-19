import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ArtAndFashion from "../../../models/artAndFashion.js";

const nme = {
  name: "nme",
  Model: ArtAndFashion,
  url: ["https://www.nme.com/"],
  linkSelector: ["h3 a"],
  articleSelectors: {
    titleSelector: [".tdb-title-text"],
    dateSelector: ["time"],
    contentSelector: [".tdb_single_subtitle"],
    articleContentSelector: [
      ".td-post-content p",
      ".td-post-content h2",
      ".td-post-content h3",
      ".td-post-content h4",
      ".td-post-content h5",
      ".td-post-content h6",
      ".td-post-content ul",
    ],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: nme,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: nme,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default nme;
