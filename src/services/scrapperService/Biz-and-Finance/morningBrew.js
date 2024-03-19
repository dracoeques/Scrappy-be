import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import BizAndFinance from "../../../models/bizAndFinance.js";

const morningBrew = {
  name: "morningBrew",
  Model: BizAndFinance,
  url: ["https://www.morningbrew.com/daily"],
  linkSelector: ["article a"],
  articleSelectors: {
    titleSelector: [".dqrjvO"],
    dateSelector: ["time"],
    contentSelector: [".ksjtZr"],
    articleContentSelector: [
      ".fXYXcn p",
      ".fXYXcn h1",
      ".fXYXcn h2",
      ".fXYXcn h3",
      ".fXYXcn h4",
      ".fXYXcn h5",
    ],
  },
  articlesWaitUntil: "networkidle0",
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: morningBrew,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default morningBrew;
