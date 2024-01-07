import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Entertainment from "../../../models/entertainment.js";

const peoplesDaily = {
  name: "peoplesDaily",
  Model: Entertainment,
  url: "http://en.people.cn/",
  linkSelector: [
    ".foreign_list1 a",
    ".foreign_list2 a",
    ".foreign_list3 a",
    ".foreign_pic8 a",
  ],
  articleSelectors: {
    titleSelector: ["h1"],
    dateSelector: [".origin"],
    contentSelector: [".d2txtCon p"],
    articleContentSelector: [".d2txtCon p", ".d2txtCon h2", ".d2txtCon h3"],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: peoplesDaily,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: peoplesDaily,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default peoplesDaily;
