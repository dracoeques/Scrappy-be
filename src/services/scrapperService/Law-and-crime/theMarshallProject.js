import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import LawAndCrime from "../../../models/lawAndCrime.js";

const theMarshallProject = {
  name: "theMarshallProject",
  Model: LawAndCrime,
  url: "https://www.themarshallproject.org/",
  linkSelector: [".featured-tall-kicker a", ".promo-content-special a"],
  articleSelectors: {
    titleSelector: [".headline ", "h1"],
    dateSelector: ["time", ".date"],
    contentSelector: [".deck"],
    articleContentSelector: [
      "article p",
      "article h2",
      "article h3",
      "article h4",
      "article h5",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: theMarshallProject,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default theMarshallProject;
