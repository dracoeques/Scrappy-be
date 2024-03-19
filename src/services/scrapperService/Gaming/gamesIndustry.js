import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Gaming from "../../../models/gaming.js";

const gamesIndustry = {
  name: "gamesIndustry",
  Model: Gaming,
  url: "https://www.gamesindustry.biz/",
  linkSelector: [".link"],
  articleSelectors: {
    titleSelector: [".title", "h1"],
    dateSelector: ["time?datetime"],
    contentSelector: [".strapline"],
    articleContentSelector: [
      ".article_body_content p",
      ".article_body_content blockquote",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: gamesIndustry,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default gamesIndustry;
