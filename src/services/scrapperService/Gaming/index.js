import clusterScrape from "../../../utils/scrapper/scrape-category.js";
import { checkIsEntryFile, getArgs } from "../../../utils/utils.js";
import destructoid from "./destructoid.js";
import escapistMagazine from "./escapistMagazine.js";
import euroGamer from "./euroGamer.js";
import gameDeveloper from "./gameDeveloper.js";
import gameInformer from "./gameInformer.js";
import gamerant from "./gamerant.js";
import gameSpot from "./gameSpot.js";
import gameWatcher from "./gameWatcher.js";
import ign from "./ign.js";
import kotaku from "./kotaku.js";
import pcGamer from "./pcGamer.js";
import polygon from "./polygon.js";
import rockPaperShotgun from "./rockPaperShotgun.js";
import shacknews from "./shacknews.js";
import vg247 from "./vg247.js";
import vox from "./vox.js";

const allGaming = [
  destructoid,
  escapistMagazine,
  euroGamer,
  gameDeveloper,
  gameInformer,
  gamerant,
  gameSpot,
  gameWatcher,
  ign,
  kotaku,
  pcGamer,
  polygon,
  rockPaperShotgun,
  shacknews,
  vg247,
  vox,
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
