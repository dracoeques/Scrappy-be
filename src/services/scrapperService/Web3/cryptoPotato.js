import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import Web3 from "../../../models/web3.js";

const cryptoPotato = {
  name: "cryptoPotato",
  Model: Web3,
  url: "https://cryptopotato.com/",
  linkSelector: [".ft-post-details a", ".recent-post a"],
  articleSelectors: {
    titleSelector: [".page-title"],
    dateSelector: [".last-modified-timestamp"],
    contentSelector: [".entry-excerpt"],
    articleContentSelector: [
      ".coincodex-content > p",
      ".coincodex-content > h2",
      ".coincodex-content > h6",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: cryptoPotato,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default cryptoPotato;
