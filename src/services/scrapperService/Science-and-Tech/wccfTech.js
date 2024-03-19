import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ScienceAndTech from "../../../models/scienceAndTech.js";

const wccfTech = {
  name: "wccfTech",
  Model: ScienceAndTech,
  url: "https://wccftech.com/",
  linkSelector: ["h3 a", "h2 a"],
  articleSelectors: {
    titleSelector: ["h1"],
    dateSelector: [".post-timestamp", "time"],
    contentSelector: [".post-main p", ".post p"],
    articleContentSelector: [
      ".post-main p",
      ".post-main h2",
      ".post-main h3",
      ".post-main h4",
      ".post p",
      ".post h2",
      ".post h3",
      ".post h4",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: wccfTech,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default wccfTech;
