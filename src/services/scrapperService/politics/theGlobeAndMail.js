import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import Politics from "../../../models/politics.js";

const theGlobeAndMail = {
  name: "theGlobeAndMail",
  Model: Politics,
  url: "https://www.theglobeandmail.com/",
  linkSelector: [".CardLink__StyledCardLink-sc-2nzf9p-0"],
  articleSelectors: {
    titleSelector: ".article-title",
    dateSelector: ["time", ".c-timestamp"],
    contentSelector: ".c-article-body__text",
    articleContentSelector: ".c-article-body__text",
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: theGlobeAndMail,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default theGlobeAndMail;
