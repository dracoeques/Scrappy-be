import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";
import Web3 from "../../../models/web3.js";

const coinJournal = {
  name: "coinJournal",
  Model: Web3,
  url: "https://coinjournal.net/",
  linkSelector: ["a.block"],
  articleSelectors: {
    titleSelector: [".leading-snug"],
    dateSelector: ["time"],
    contentSelector: [".post-article-content ul"],
    articleContentSelector: [
      ".post-article-content p",
      ".post-article-content h2",
      ".post-article-content h6",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: coinJournal,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default coinJournal;
