import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Gaming from "../../../models/gaming.js";

const gameDeveloper = {
  name: "gameDeveloper",
  Model: Gaming,
  url: "https://www.gamedeveloper.com/",
  linkSelector: [
    ".TopFeaturedPreview-TitleWrapper",
    ".TopFeatured-LatestNewsItemTitle a",
    ".ListPreview-Title",
    ".ContributorFocusedCard-Title",
    ".HorizontalCard-Title",
  ],
  articleSelectors: {
    titleSelector: [".ArticleBase-LargeTitle"],
    dateSelector: [".Contributors-Date"],
    contentSelector: [".ArticleBase-HeaderSummary"],
    articleContentSelector: [
      ".ContentModule-Wrapper p",
      ".ContentModule-Wrapper h1",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: gameDeveloper,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default gameDeveloper;
