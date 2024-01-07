import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import Politics from "../../../models/politics.js";

const theJapanTimes = {
  name: "theJapanTimes",
  Model: Politics,
  url: "https://www.japantimes.co.jp/",
  linkSelector: [".wrapper-link", ".index-loop-article a"],
  articleSelectors: {
    titleSelector: ".single-title h1",
    dateSelector: ["time"],
    contentSelector: "#jtarticle p",
    articleContentSelector: ["#jtarticle p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: theJapanTimes,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default theJapanTimes;
