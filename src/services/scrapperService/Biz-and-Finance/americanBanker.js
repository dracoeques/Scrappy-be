import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import BizAndFinance from "../../../models/bizAndFinance.js";

const americanBanker = {
  name: "americanBanker",
  Model: BizAndFinance,
  url: ["https://www.americanbanker.com/"],
  linkSelector: [
    ".PromoLargeImageRight-title a",
    ".PromoTab-title a",
    ".PromoMediumImageRight-title a",
    ".PromoLeadItem-title a",
  ],
  articleSelectors: {
    titleSelector: [".ArticlePage-headline"],
    dateSelector: [".ArticlePage-datePublished"],
    contentSelector: [".RichTextArticleBody-body p"],
    articleContentSelector: [
      ".RichTextArticleBody-body p",
      ".RichTextArticleBody-body h1",
      ".RichTextArticleBody-body h2",
      ".RichTextArticleBody-body h3",
      ".RichTextArticleBody-body h4",
      ".RichTextArticleBody-body h5",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: americanBanker,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default americanBanker;
