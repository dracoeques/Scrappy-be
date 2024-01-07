import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import Web3 from "../../../models/web3.js";

const theMerkle = {
  name: "theMerkle",
  Model: Web3,
  url: "https://themerkle.com/",
  linkSelector: [".title a"],
  articleSelectors: {
    titleSelector: [".title"],
    dateSelector: [".date"],
    contentSelector: [".thecontent strong"],
    articleContentSelector: [
      ".thecontent p",
      ".thecontent h2",
      ".thecontent h6",
      ".thecontent ul",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: theMerkle,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default theMerkle;
