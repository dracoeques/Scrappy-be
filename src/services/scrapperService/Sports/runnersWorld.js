import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import Sports from "../../../models/sports.js";

const runnersWorld = {
  name: "runnersWorld",
  Model: Sports,
  url: "https://runnersWorld.com/",
  linkSelector: [".enk2x9t2"],
  articleSelectors: {
    titleSelector: ["h1", ".css-16e12cs"],
    dateSelector: [".css-gbghxv p"],
    contentSelector: ["time"],
    articleContentSelector: [".article-body p", ".article-body h2"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: runnersWorld,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default runnersWorld;
