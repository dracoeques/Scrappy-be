import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ArtAndFashion from "../../../models/artAndFashion.js";

const stereogum = {
  name: "stereogum",
  Model: ArtAndFashion,
  url: ["https://www.stereogum.com/"],
  linkSelector: [".article-card__title a"],
  articleSelectors: {
    titleSelector: [".headline"],
    dateSelector: [".date"],
    contentSelector: [".text-block__inner p"],
    articleContentSelector: [
      ".text-block__inner p",
      ".text-block__inner h2",
      ".text-block__inner h3",
      ".text-block__inner h4",
      ".text-block__inner h5",
      ".text-block__inner h6",
      ".text-block__inner ul",
    ],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: stereogum,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: stereogum,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default stereogum;
