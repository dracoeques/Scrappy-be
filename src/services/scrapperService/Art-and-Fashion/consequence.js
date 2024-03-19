import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ArtAndFashion from "../../../models/artAndFashion.js";

const consequence = {
  name: "consequence",
  Model: ArtAndFashion,
  url: ["https://consequence.net/"],
  linkSelector: ["h3 a", "h4 a", "h2 a"],
  articleSelectors: {
    titleSelector: ["h1"],
    dateSelector: [".post-date"],
    contentSelector: [".post-header p"],
    articleContentSelector: [
      ".alm-listing p",
      ".alm-listing h2",
      ".alm-listing h3",
      ".alm-listing h4",
      ".alm-listing h5",
      ".alm-listing h6",
      ".alm-listing ul",
    ],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: consequence,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: consequence,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default consequence;
