import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Entertainment from "../../../models/entertainment.js";

const ndtv = {
  name: "ndtv",
  Model: Entertainment,
  url: "https://www.ndtv.com/",
  linkSelector: [".thumbnail a"],
  articleSelectors: {
    titleSelector: [".sp-ttl"],
    dateSelector: [".pst-by_lnk"],
    contentSelector: [".sp-descp"],
    articleContentSelector: [
      ".sp-ttl-wrp p",
      ".sp-ttl-wrp h2",
      ".sp-ttl-wrp h3",
    ],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: ndtv,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: ndtv,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default ndtv;
