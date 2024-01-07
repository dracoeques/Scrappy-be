import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Entertainment from "../../../models/entertainment.js";

const yonhap = {
  name: "yonhap",
  Model: Entertainment,
  url: "https://en.yna.co.kr/",
  linkSelector: [".tit a", ".list-box02 a"],
  articleSelectors: {
    titleSelector: [".title-article01 h1", "h1"],
    dateSelector: [".info-con"],
    contentSelector: [".story-news p"],
    articleContentSelector: [".story-news p"],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: yonhap,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: yonhap,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default yonhap;
