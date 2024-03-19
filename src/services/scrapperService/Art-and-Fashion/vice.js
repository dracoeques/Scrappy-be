import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ArtAndFashion from "../../../models/artAndFashion.js";

const vice = {
  name: "vice",
  Model: ArtAndFashion,
  url: ["https://www.vice.com/en/section/music"],
  linkSelector: ["h3 a"],
  articleSelectors: {
    titleSelector: [".article__header__title", "h1"],
    dateSelector: ["time?datetime"],
    contentSelector: [".article__header__dek"],
    articleContentSelector: [
      ".article__body-components p",
      ".article__body-components h2",
      ".article__body-components h3",
      ".article__body-components h4",
      ".article__body-components h5",
      ".article__body-components h6",
      ".article__body-components ul",
    ],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: vice,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: vice,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default vice;
