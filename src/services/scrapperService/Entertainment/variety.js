import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Entertainment from "../../../models/entertainment.js";

const variety = {
  name: "variety",
  Model: Entertainment,
  url: "https://variety.com/",
  linkSelector: [".c-title__link"],
  articleSelectors: {
    titleSelector: ["#section-heading"],
    dateSelector: ["time"],
    contentSelector: [".o-custom-paragraph"],
    articleContentSelector: [".pmc-not-a-paywall p"],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: variety,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: variety,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default variety;
