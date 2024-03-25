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
import theBlockchain from "./theBlockchain.js";
import ethereumWorldNews from "./ethereumworldnews.js";
import cryptonews from "./cryptonews.js";
import bankless from "./bankless.js";
import bitfinex from "./bitfinex.js";
import zycrypto from "./zycrypto.js";
import okx from "./okx.js";

const allWeb3 = [
  ambCrypto,
  bankless,
  bitcoinist,
  bitfinex,
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
  cryptonews,
  cryptoNinjas,
  cryptoPotato,
  cryptoSlate,
  decrypt,
  ethereumWorldNews,
  newsBtc,
  okx,
  theBlock,
  theBlockchain,
  theDefiant,
  theMerkle,
  zycrypto,
];

export const getNews = async () => {
  await clusterScrape({ filepath: import.meta.url, articles: allWeb3 });
};

(async () => {
  await scrapeCategory(allWeb3, import.meta.url);
})();

export default allWeb3;
