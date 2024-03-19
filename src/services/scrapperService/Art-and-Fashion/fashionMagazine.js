import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ArtAndFashion from "../../../models/artAndFashion.js";

const fashionMagazine = {
  name: "fashionMagazine",
  Model: ArtAndFashion,
  url: ["https://fashionmagazine.com/"],
  linkSelector: ["a.gtm-article-title"],
  articleSelectors: {
    titleSelector: [".article-headline", "h1"],
    dateSelector: [".article-byline__date", "time"],
    contentSelector: [".standfirst"],
    articleContentSelector: [
      ".article-main p",
      ".article-main h2",
      ".article-main h3",
      ".article-main h4",
      ".article-main h5",
      ".article-main h6",
      ".article-main ul",
    ],
  },
  selectorWaitTime: 4000,
};

export const getNews = async () => {
  const res = await singleScrape({
    article: fashionMagazine,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: fashionMagazine,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default fashionMagazine;
