import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ArtAndFashion from "../../../models/artAndFashion.js";

const tinyMixTapes = {
  name: "tinyMixTapes",
  Model: ArtAndFashion,
  url: ["https://www.tinymixtapes.com/"],
  linkSelector: [".tile__link"],
  articleSelectors: {
    titleSelector: [".entry__main-title", "h1"],
    dateSelector: ["time"],
    contentSelector: [".entry__theme"],
    articleContentSelector: [
      ".entry__body-text p",
      ".entry__body-text h2",
      ".entry__body-text h3",
      ".entry__body-text h4",
      ".entry__body-text h5",
      ".entry__body-text h6",
      ".entry__body-text ul",
    ],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: tinyMixTapes,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: tinyMixTapes,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default tinyMixTapes;
