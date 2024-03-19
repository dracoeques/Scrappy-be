import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ArtAndFashion from "../../../models/artAndFashion.js";

const complex = {
  name: "complex",
  Model: ArtAndFashion,
  url: ["https://www.complex.com/music"],
  linkSelector: [
    ".megaFeedCardDetails__1jTru",
    ".hyIQpj a",
    ".lnIWvX a",
    ".sc-a98b0452-4",
  ],
  articleSelectors: {
    titleSelector: [".Article__Headline-sc-1x17u0q-0", "h1"],
    dateSelector: [".Article__ArticleDate-sc-1x17u0q-2"],
    contentSelector: [".Article__Description-sc-1x17u0q-11"],
    articleContentSelector: [
      ".subbuzzes__2mQEr p",
      ".subbuzzes__2mQEr h2",
      ".subbuzzes__2mQEr h3",
      ".subbuzzes__2mQEr h4",
      ".subbuzzes__2mQEr h5",
      ".subbuzzes__2mQEr h6",
      ".subbuzzes__2mQEr ul",
    ],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: complex,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: complex,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default complex;
