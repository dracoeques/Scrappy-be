import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import BizAndFinance from "../../../models/bizAndFinance.js";

const businessBecause = {
  name: "businessBecause",
  Model: BizAndFinance,
  url: ["https://www.businessbecause.com/"],
  linkSelector: ["a.no-underline-hover"],
  articleSelectors: {
    titleSelector: [".header-1"],
    dateSelector: ["#author_section .col-md-2.col-12.one-sixth:nth-child(4) p"],
    contentSelector: [".intro-news"],
    articleContentSelector: [
      "#main-content p",
      "#main-content h1",
      "#main-content h2",
      "#main-content h3",
      "#main-content h4",
      "#main-content h5",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: businessBecause,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default businessBecause;
