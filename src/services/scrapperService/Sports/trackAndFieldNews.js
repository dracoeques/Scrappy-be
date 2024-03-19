import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import Sports from "../../../models/sports.js";

const trackAndFieldNews = {
  name: "trackAndFieldNews",
  Model: Sports,
  url: "https://trackandfieldnews.com/",
  linkSelector: [".article-title a"],
  articleSelectors: {
    titleSelector: [".entry-title"],
    dateSelector: [".issue-name", ".cs-meta-date"],
    contentSelector: [".entry-content p"],
    articleContentSelector: [".entry-content p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: trackAndFieldNews,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default trackAndFieldNews;
