import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import BizAndFinance from "../../../models/bizAndFinance.js";

const theMotleyFool = {
  name: "theMotleyFool",
  Model: BizAndFinance,
  url: "https://www.fool.com/",
  linkSelector: ["a.text-gray-1100"],
  articleSelectors: {
    titleSelector: ["header h1"],
    dateSelector: ["header + div.text-lg"],
    contentSelector: ["ul.font-medium"],
    articleContentSelector: [
      ".tailwind-article-body p",
      ".tailwind-article-body h1",
      ".tailwind-article-body h2",
      ".tailwind-article-body h3",
      ".tailwind-article-body h4",
      ".tailwind-article-body h5",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: theMotleyFool,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default theMotleyFool;
