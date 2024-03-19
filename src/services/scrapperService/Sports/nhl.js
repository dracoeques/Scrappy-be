import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import Sports from "../../../models/sports.js";

const nhl = {
  name: "nhl",
  Model: Sports,
  url: "https://www.nhl.com/",
  linkSelector: [".nhl-c-headlines__link"],
  articleSelectors: {
    titleSelector: ["h1"],
    dateSelector: ["time?datetime"],
    contentSelector: [".nhl-c-article__summary"],
    articleContentSelector: [".nhl-c-article  p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: nhl,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default nhl;
