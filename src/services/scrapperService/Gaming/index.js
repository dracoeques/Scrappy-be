import clusterScrape from "../../../utils/scrapper/scrape-category.js";
import { checkIsEntryFile, getArgs } from "../../../utils/utils.js";
import destructoid from "./destructoid.js";
import euroGamer from "./euroGamer.js";
import gameInformer from "./gameInformer.js";
import gameSpot from "./gameSpot.js";
import ign from "./ign.js";
import kotaku from "./kotaku.js";
import pcGamer from "./pcGamer.js";
import polygon from "./polygon.js";
import rockPaperShotgun from "./rockPaperShotgun.js";
import vg247 from "./vg247.js";

const allGaming = [
  destructoid,
  euroGamer,
  gameInformer,
  gameSpot,
  ign,
  kotaku,
  pcGamer,
  polygon,
  rockPaperShotgun,
  vg247,
];
export const getNews = async () => {
  await clusterScrape({ filepath: import.meta.url, articles: allGaming });
};

(async () => {
  if (!checkIsEntryFile(import.meta.url)) return;
  const { maxConcurency, concurencyLevel } = getArgs();

  await clusterScrape({
    filepath: import.meta.url,
    articles: allGaming,
    checkEntryFile: true,
    maxConcurrency: maxConcurency,
    concurrencyLevel: concurencyLevel,
  });
})();

export default allGaming;
