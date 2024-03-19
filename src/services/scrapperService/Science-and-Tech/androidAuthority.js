import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import ScienceAndTech from "../../../models/scienceAndTech.js";

const androidAuthority = {
  name: "androidAuthority",
  Model: ScienceAndTech,
  url: ["https://www.androidauthority.com/"],
  linkSelector: [".--_-___Og a", ".--_-___Qc a"],
  articleSelectors: {
    titleSelector: [".--_-___Bc", "h1"],
    dateSelector: [".--_-___Ub"],
    contentSelector: [".storytext p"],
    articleContentSelector: [
      ".--_-___id p",
      ".--_-___id h1",
      ".--_-___id h2",
      ".--_-___id h3",
      ".--_-___id h4",
      ".--_-___id h5",
      ".--_-___id h6",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: androidAuthority,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default androidAuthority;
