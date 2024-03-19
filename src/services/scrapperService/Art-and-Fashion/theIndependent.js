import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import ArtAndFashion from "../../../models/artAndFashion.js";

const theIndependent = {
  name: "theIndependent",
  Model: ArtAndFashion,
  url: ["https://www.independent.co.uk/arts-entertainment"],
  linkSelector: [".title"],
  articleSelectors: {
    titleSelector: [".fmwLhf", "h1"],
    dateSelector: [
      "time?datetime",
      ".social-date-modified__text",
      "#article-published-date",
    ],
    contentSelector: [".body-description p"],
    articleContentSelector: [
      "#main p",
      "#main h2",
      "#main h3",
      "#main h4",
      "#main h5",
      "#main h6",
      "#main ul",
      ".body-description p",
      ".body-description h2",
      ".body-description h3",
      ".body-description h4",
      ".body-description h5",
      ".body-description h6",
      ".body-description ul",
    ],
  },
};
export const getNews = async () => {
  const res = await singleScrape({
    article: theIndependent,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: theIndependent,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default theIndependent;
