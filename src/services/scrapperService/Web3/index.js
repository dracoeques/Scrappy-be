import clusterScrape from "../../../utils/scrapper/scrape-category.js";
import { checkIsEntryFile, getArgs } from "../../../utils/utils.js";
import blockonomi from "./blockonomi.js";
import braveNewCoin from "./braveNewCoin.js";
import coinDesk from "./coinDesk.js";
import cointelegraph from "./cointelegraph.js";
import cryptoSlate from "./cryptoSlate.js";
import decrypt from "./decrypt.js";
import theBlock from "./theBlock.js";
import theDefiant from "./theDefiant.js";
import CoinGape from "./coinGape.js";
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
  blockonomi,
  braveNewCoin,
  coinDesk,
  CoinGape,
  coinMarketCap,
  cointelegraph,
  cryptoBriefing,
  cryptoSlate,
  decrypt,
  theBlock,
  theDefiant,
  cryptoNinjas,
  bitcoinist,
  newsBtc,
  coinJournal,
  cryptoInsider,
  cryptoPotato,
  ambCrypto,
  cryptoGlobe,
  theMerkle,
];

export const getNews = async () => {
  await clusterScrape({ filepath: import.meta.url, articles: allWeb3 });
};

(async () => {
  if (!checkIsEntryFile(import.meta.url)) return;
  const { maxConcurency, concurencyLevel } = getArgs();

  await clusterScrape({
    filepath: import.meta.url,
    articles: allWeb3,
    checkEntryFile: true,
    maxConcurrency: maxConcurency,
    concurrencyLevel: concurencyLevel,
  });
})();

export default allWeb3;
