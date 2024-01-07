import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import Sports from "../../../models/sports.js";

const euroSport = {
  name: "euroSport",
  Model: Sports,
  url: "https://www.eurosport.com/",
  linkSelector: [
    ".EnrichedHeroCard__secondaryCardWrapper a",
    ".SingleHeroCard a",
    ".atom-grid a",
  ],
  articleSelectors: {
    titleSelector: [".common-container h1"],
    dateSelector: ['[data-testid="author-date-information"]'],
    contentSelector: [".ArticleHeroBlack__teaser--light"],
    articleContentSelector: [".article-body .article-s4-rs"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: euroSport,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default euroSport;
