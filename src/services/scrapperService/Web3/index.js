import clusterScrape from "../../../utils/scrapper/cluster-scrape.js";
import { scrapeCategory } from "../../../utils/scrapper/scrape-category.js";
import blockonomi from "./blockonomi.js";
import braveNewCoin from "./braveNewCoin.js";
import coinDesk from "./coinDesk.js";
import cointelegraph from "./cointelegraph.js";
import cryptoSlate from "./cryptoSlate.js";
import decrypt from "./decrypt.js";
import theBlock from "./theBlock.js";
import theDefiant from "./theDefiant.js";
import coinGape from "./coinGape.js";
import coinMarketCap from "./coinMarketCap.js";
import cryptoBriefing from "./cryptoBriefing.js";
import cryptoNinjas from "./cryptoNinjas.js";
import bitcoinist from "./bitcoinist.js";
import newsBtc from "./newsBtc.js";
import coinJournal from "./coinJournal.js";
import cryptoInsider from "./cryptoInsider.js";
import cryptoPotato from "./cryptoPotato.js";
import ambCrypto from "./ambCrypto.js";
import cryptoGlobe from "./cryptoGlobe.js";
import theMerkle from "./theMerkle.js";

const allWeb3 = [
  ambCrypto,
  bitcoinist,
  blockonomi,
  braveNewCoin,
  coinDesk,
  coinGape,
  coinJournal,
  coinMarketCap,
  cointelegraph,
  cryptoBriefing,
  cryptoGlobe,
  cryptoInsider,
  cryptoNinjas,
  cryptoPotato,
  cryptoSlate,
  decrypt,
  newsBtc,
  theBlock,
  theDefiant,
  theMerkle,
];

export const getNews = async () => {
  await clusterScrape({ filepath: import.meta.url, articles: allWeb3 });
};

(async () => {
  await scrapeCategory(allWeb3, import.meta.url);
})();

export default allWeb3;
