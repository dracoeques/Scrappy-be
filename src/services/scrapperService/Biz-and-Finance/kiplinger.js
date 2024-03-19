import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import BizAndFinance from "../../../models/bizAndFinance.js";

const kiplinger = {
  name: "kiplinger",
  Model: BizAndFinance,
  url: ["https://www.kiplinger.com/"],
  linkSelector: [".listing__link"],
  articleSelectors: {
    titleSelector: [".header__title"],
    dateSelector: ["time?datetime", "time"],
    contentSelector: [".header__strapline"],
    articleContentSelector: [
      ".article__body p",
      ".article__body h1",
      ".article__body h2",
      ".article__body h3",
      ".article__body h4",
      ".article__body h5",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: kiplinger,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default kiplinger;
