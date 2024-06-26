import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import ArtAndFashion from "../../../models/artAndFashion.js";

const artsy = {
  name: "artsy",
  Model: ArtAndFashion,
  url: "https://www.artsy.net/",
  linkSelector: [".eeJRiP", ".jtNaQt"],
  articleSelectors: {
    titleSelector: [".kpkeEU", "h1"],
    dateSelector: ["time", ".ekLRlB"],
    contentSelector: [".summary"],
    articleContentSelector: [
      ".jxjKyh p",
      ".jxjKyh h2",
      ".jxjKyh h3",
      ".jxjKyh h4",
      ".jxjKyh h5",
      ".jxjKyh h6",
      ".jxjKyh ul",
      ".Box-sc-15se88d-0 p",
      ".Box-sc-15se88d-0 h2",
      ".Box-sc-15se88d-0 h3",
      ".Box-sc-15se88d-0 h4",
      ".Box-sc-15se88d-0 h5",
      ".Box-sc-15se88d-0 h6",
      ".Box-sc-15se88d-0 ul",
    ],
  },
};

export const getNews = async () => {
  const res = await singleScrape({
    article: artsy,
    filepath: import.meta.url,
    checkEntryFile: false,
  });
  return res;
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: artsy,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default artsy;
