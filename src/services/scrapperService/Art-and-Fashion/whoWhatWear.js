import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ArtAndFashion from "../../../models/artAndFashion.js";

const whoWhatWear = {
  name: "whoWhatWear",
  Model: ArtAndFashion,
  url: ["https://www.whowhatwear.com/"],
  linkSelector: [".card__title a"],
  articleSelectors: {
    titleSelector: [".headline", "h1"],
    dateSelector: [".story__date", "time"],
    contentSelector: [".story__section p", ".widgets p"],
    articleContentSelector: [
      ".story__section p",
      ".story__section h2",
      ".story__section h3",
      ".story__section h4",
      ".story__section h5",
      ".story__section h6",
      ".story__section ul",
      ".widgets p",
      ".widgets h2",
      ".widgets h3",
      ".widgets h4",
      ".widgets h5",
      ".widgets h6",
      ".widgets ul",
    ],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: whoWhatWear,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: whoWhatWear,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default whoWhatWear;
