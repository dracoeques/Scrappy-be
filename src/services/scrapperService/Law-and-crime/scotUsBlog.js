import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import LawAndCrime from "../../../models/lawAndCrime.js";

const scotUsBlog = {
  name: "scotUsBlog",
  Model: LawAndCrime,
  url: "https://www.scotusblog.com/",
  linkSelector: ["h1 a", "h2 a"],
  articleSelectors: {
    titleSelector: [".entry_title"],
    dateSelector: [".entry_date "],
    contentSelector: [".post_text_inner p"],
    articleContentSelector: [
      ".post_text_inner p",
      ".post_text_inner h2",
      ".post_text_inner h3",
      ".post_text_inner h4",
      ".post_text_inner h5",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: scotUsBlog,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default scotUsBlog;
