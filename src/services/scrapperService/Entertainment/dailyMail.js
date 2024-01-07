import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Entertainment from "../../../models/entertainment.js";

const dailyMail = {
  name: "dailyMail",
  Model: Entertainment,
  url: "https://www.dailymail.co.uk/ushome/index.html",
  linkSelector: [".linkro-darkred a", ".link-bogr2 a"],
  articleSelectors: {
    titleSelector: [".withoutBlobs--dkFi0", "h1"],
    dateSelector: ["time"],
    contentSelector: [".articleBody p"],
    articleContentSelector: [
      "[itemprop='articleBody'] p",
      "[itemprop='articleBody'] h2",
      "[itemprop='articleBody'] h3",
    ],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: dailyMail,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: dailyMail,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default dailyMail;
