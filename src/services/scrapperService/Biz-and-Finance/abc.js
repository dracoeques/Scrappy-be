import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import BizAndFinance from "../../../models/bizAndFinance.js";

const abc = {
  name: "abc",
  Model: BizAndFinance,
  url: "https://www.abc.net.au/",
  linkSelector: [".ContentCard_link__x6IlW"],
  articleSelectors: {
    titleSelector: [".Headline_meta__ZgyGe .Heading_heading__VGa5B"],
    dateSelector: ["time"],
    contentSelector: [".Article_body__y7ykc p"],
    articleContentSelector: [".Article_body__y7ykc p"],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: abc,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: abc,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default abc;
