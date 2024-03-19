import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ArtAndFashion from "../../../models/artAndFashion.js";

const theCurvyFashionista = {
  name: "theCurvyFashionista",
  Model: ArtAndFashion,
  url: ["https://thecurvyfashionista.com/"],
  linkSelector: [".entry-title a"],
  articleSelectors: {
    titleSelector: [".fw-headline", "h1"],
    dateSelector: ["time"],
    contentSelector: [".entry-content p"],
    articleContentSelector: [
      ".entry-content p",
      ".entry-content h2",
      ".entry-content h3",
      ".entry-content h4",
      ".entry-content h5",
      ".entry-content h6",
      ".entry-content ul",
    ],
  },
  selectorWaitTime: 4000,
};

export const getNews = async () => {
  const res = await singleScrape({
    article: theCurvyFashionista,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: theCurvyFashionista,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default theCurvyFashionista;
