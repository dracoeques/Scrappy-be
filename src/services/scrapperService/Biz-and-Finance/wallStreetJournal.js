import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import BizAndFinance from "../../../models/bizAndFinance.js";

const wallStreetJournal = {
  name: "wallStreetJournal",
  Model: BizAndFinance,
  url: "https://www.wsj.com/",
  linkSelector: [".WSJTheme--headline--unZqjb45 > a", ".style--link--1DquuyN1"],
  articleSelectors: {
    titleSelector: ["h1"],
    dateSelector: [".css-1jzm7tb-TimeTag", "time"],
    contentSelector: [".css-jiugt2-Dek-Dek"],
    articleContentSelector: [
      ".e1noyqgz19 p",
      ".e1noyqgz19 h1",
      ".e1noyqgz19 h2",
      ".e1noyqgz19 h3",
      ".e1noyqgz19 h4",
      ".e1noyqgz19 h5",
      ".e1noyqgz19 h6",
    ],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: wallStreetJournal,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: wallStreetJournal,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default wallStreetJournal;
