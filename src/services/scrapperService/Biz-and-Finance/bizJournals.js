import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import BizAndFinance from "../../../models/bizAndFinance.js";

const bizJournals = {
  name: "bizJournals",
  Model: BizAndFinance,
  url: "https://www.bizJournals.com/",
  linkSelector: [".bizj_leading-stretch-link", ".bizj_leadin-stretch-link"],
  articleSelectors: {
    titleSelector: ["#ArticleHeader h1"],
    dateSelector: ["time"],
    contentSelector: ["[data-dev='ArticleContent'] p"],
    articleContentSelector: ["[data-dev='ArticleContent'] p"],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: bizJournals,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: bizJournals,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default bizJournals;
