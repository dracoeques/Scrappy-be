import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import BizAndFinance from "../../../models/bizAndFinance.js";

const cnnBusiness = {
  name: "cnnBusiness",
  Model: BizAndFinance,
  url: "https://edition.cnn.com/business",
  linkSelector: ["[data-link-type='article']"],
  articleSelectors: {
    titleSelector: [".headline__text", "h1"],
    dateSelector: [".timestamp", "time"],
    contentSelector: [".article__content p"],
    articleContentSelector: [
      ".article__content p",
      ".article__content h1",
      ".article__content h2",
      ".article__content h3",
      ".article__content h4",
      ".article__content h5",
      ".article__content h6",
      ".article__content ul",
    ],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: cnnBusiness,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: cnnBusiness,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default cnnBusiness;
