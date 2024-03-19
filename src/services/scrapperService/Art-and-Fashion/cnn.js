import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import ArtAndFashion from "../../../models/artAndFashion.js";

const cnn = {
  name: "cnn",
  Model: ArtAndFashion,
  url: "https://www.cnn.com/style",
  linkSelector: [".container__link"],
  articleSelectors: {
    titleSelector: [".headline__text"],
    dateSelector: [".timestamp"],
    contentSelector: [".article__content p"],
    articleContentSelector: [".article__content p"],
  },
};
export const getNews = async () => {
  const res = await singleScrape({
    article: cnn,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: cnn,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default cnn;
