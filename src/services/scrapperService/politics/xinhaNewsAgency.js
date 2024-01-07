import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import Politics from "../../../models/politics.js";

const xinhuaNewsAgency = {
  name: "xinhuaNewsAgency",
  Model: Politics,
  url: "https://english.news.cn/",
  linkSelector: [".tit a", ".headnews-left a"],
  articleSelectors: {
    titleSelector: ".conTop h1",
    dateSelector: [".time"],
    contentSelector: "#detailContent strong",
    articleContentSelector: ["#detailContent p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: xinhaNewsAgency,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default xinhuaNewsAgency;
