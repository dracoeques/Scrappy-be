import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
import { checkIsEntryFile } from "../../../utils/utils.js";

import Web3 from "../../../models/web3.js";

const coinDesk = {
  name: "coinDesk",
  Model: Web3,
  url: [
    "https://www.coindesk.com/",
    "https://www.coindesk.com/markets/",
    "https://www.coindesk.com/business/",
    "https://www.coindesk.com/policy/",
    "https://www.coindesk.com/tech/",
  ],
  linkSelector: [
    ".card-imagestyles__CardImageWrapper-sc-1kbd3qh-0",
    ".card-titlestyles__CardTitleWrapper-sc-1ptmy9y-0",
  ],
  articleSelectors: {
    titleSelector: [".at-headline h1"],
    dateSelector: [".at-created span"],
    contentSelector: [".at-subheadline h2"],
    articleContentSelector: [
      ".contentstyle__StyledWrapper-g5cdrh-0 p",
      ".contentstyle__StyledWrapper-g5cdrh-0 h2",
      ".contentstyle__StyledWrapper-g5cdrh-0 h6",
      ".contentstyle__StyledWrapper-sc-g5cdrh-0 p",
      ".contentstyle__StyledWrapper-sc-g5cdrh-0 h2",
      ".contentstyle__StyledWrapper-sc-g5cdrh-0 h6",
    ],
  },
};

(async () => {
  const isEntryFile = checkIsEntryFile(import.meta.url);
  if (isEntryFile)
    await singleScrape({
      article: coinDesk,
      filepath: import.meta.url,
      checkEntryFile: true,
    });
})();

export default coinDesk;
