import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Politics from "../../../models/politics.js";

const theAtlantic = {
  name: "theAtlantic",
  Model: Politics,
  url: "https://www.theatlantic.com/world/",
  linkSelector: [
    "h1 a",
    "h2 a",
    ".Latest_link__ChL5Z",
    ".HomepageBottom_link___dTv_",
  ],
  articleSelectors: {
    titleSelector: [".ArticleTitle_root__VrZaG"],
    dateSelector: ["time"],
    contentSelector: [".ArticleDek_root__P3leE"],
    articleContentSelector: [
      ".ArticleBody_root__2gF81 p",
      ".ArticleBody_root__2gF81 h1",
      ".ArticleBody_root__2gF81 h2",
      ".ArticleBody_root__2gF81 h3",
      ".ArticleBody_root__2gF81 h4",
      ".ArticleBody_root__2gF81 h5",
      ".ArticleBody_root__2gF81 h6",
      ".ArticleBody_root__2gF81 ul",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: theAtlantic,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default theAtlantic;
