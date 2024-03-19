import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ArtAndFashion from "../../../models/artAndFashion.js";

const theLineOfBestFit = {
  name: "theLineOfBestFit",
  Model: ArtAndFashion,
  url: ["https://www.thelineofbestfit.com/news"],
  linkSelector: ["a.block.group"],
  articleSelectors: {
    titleSelector: ["h1"],
    dateSelector: [".g--news-left span.font-title"],
    contentSelector: [".g--news-left div.leading-extra-tight"],
    articleContentSelector: [
      ".c--article-copy__sections p",
      ".c--article-copy__sections h2",
      ".c--article-copy__sections h3",
      ".c--article-copy__sections h4",
      ".c--article-copy__sections h5",
      ".c--article-copy__sections h6",
      ".c--article-copy__sections ul",
    ],
  },
  selectorWaitTime: 4000,
};

export const getNews = async () => {
  const res = await singleScrape({
    article: theLineOfBestFit,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: theLineOfBestFit,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default theLineOfBestFit;
