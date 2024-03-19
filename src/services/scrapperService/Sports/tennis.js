import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import Sports from "../../../models/sports.js";

const tennis = {
  name: "tennis",
  Model: Sports,
  url: "https://www.tennis.com/news/all-news/",
  linkSelector: ["a.fm-card-wrap"],
  articleSelectors: {
    titleSelector: [".oc-c-article__title"],
    dateSelector: [".oc-c-article__date"],
    contentSelector: [".oc-c-article__summary"],
    articleContentSelector: [".oc-c-article__body p", ".oc-c-article__body h2"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: tennis,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default tennis;
