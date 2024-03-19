import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ArtAndFashion from "../../../models/artAndFashion.js";

const spin = {
  name: "spin",
  Model: ArtAndFashion,
  url: ["https://www.spin.ph/"],
  linkSelector: [".ttle a"],
  articleSelectors: {
    titleSelector: [".gtm-articleContent", "h1"],
    dateSelector: [".stmp"],
    contentSelector: [".blrb"],
    articleContentSelector: [
      ".artl p",
      ".artl h2",
      ".artl h3",
      ".artl h4",
      ".artl h5",
      ".artl h6",
      ".artl ul",
    ],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: spin,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: spin,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default spin;
