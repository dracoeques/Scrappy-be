import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ScienceAndTech from "../../../models/scienceAndTech.js";

const cnbc = {
  name: "cnbc",
  Model: ScienceAndTech,
  url: "https://www.cnbc.com/technology/",
  linkSelector: [".Card-title"],
  articleSelectors: {
    titleSelector: [".LiveBlogHeader-headline", ".ArticleHeader-headline"],
    dateSelector: ["time"],
    contentSelector: [".ArticleBody-articleBody p"],
    articleContentSelector: [
      ".FeaturedContent-articleBody p",
      ".FeaturedContent-articleBody h2",
      ".LiveBlogBody-articleBody p",
      ".ArticleBody-articleBody p",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: cnbc,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default cnbc;
