import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import Sports from "../../../models/sports.js";

const insideLacrosse = {
  name: "insideLacrosse",
  Model: Sports,
  url: "https://www.insidelacrosse.com/",
  linkSelector: ["h3 a"],
  articleSelectors: {
    titleSelector: ["h1.article-headline"],
    dateSelector: [".text-gray.m-b-0.inline-block"],
    contentSelector: [".article p:nth-of-type(2)"],
    articleContentSelector: [".article p"],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: insideLacrosse,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default insideLacrosse;
