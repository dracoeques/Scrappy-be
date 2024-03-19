import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import Sports from "../../../models/sports.js";

const golfDigest = {
  name: "golfDigest",
  Model: Sports,
  url: "https://www.golfdigest.com/",
  linkSelector: [".o-StoryCard"],
  articleSelectors: {
    titleSelector: ["h1.o-AssetTitle__a-Headline"],
    dateSelector: [".o-AssetPublishDate"],
    contentSelector: [".o-CustomRTE"],
    articleContentSelector: [".articleBody p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: golfDigest,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default golfDigest;
