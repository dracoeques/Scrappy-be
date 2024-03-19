import clusterScrape from "../../../utils/scrapper/cluster-scrape.js";
import { scrapeCategory } from "../../../utils/scrapper/scrape-category.js";
import attackOfTheFanboy from "./attackOfTheFanboy.js";
import destructoid from "./destructoid.js";
import escapistMagazine from "./escapistMagazine.js";
import euroGamer from "./euroGamer.js";
import gameDeveloper from "./gameDeveloper.js";
import gameInformer from "./gameInformer.js";
import gamerant from "./gamerant.js";
import gamesIndustry from "./gamesIndustry.js";
import gameSpot from "./gameSpot.js";
import gamesRadar from "./gamesRadar.js";
import gameWatcher from "./gameWatcher.js";
import gamingBolt from "./gamingBolt.js";
import ign from "./ign.js";
import kotaku from "./kotaku.js";
import nicheGamer from "./nicheGamer.js";
import pcGamer from "./pcGamer.js";
import pocketGamer from "./pocketGamer.js";
import polygon from "./polygon.js";
import rockPaperShotgun from "./rockPaperShotgun.js";
import shacknews from "./shacknews.js";
import siliconera from "./siliconera.js";
import theVerge from "./theVerge.js";
import twinfinite from "./twinfinite.js";
import vg247 from "./vg247.js";
import vox from "./vox.js";

const allGaming = [
  attackOfTheFanboy,
  destructoid,
  escapistMagazine,
  euroGamer,
  gameDeveloper,
  gameInformer,
  gamerant,
  gamesIndustry,
  gameSpot,
  gamesRadar,
  gameWatcher,
  gamingBolt,
  ign,
  kotaku,
  nicheGamer,
  pcGamer,
  pocketGamer,
  polygon,
  rockPaperShotgun,
  shacknews,
  siliconera,
  theVerge,
  twinfinite,
  vg247,
  vox,
];
export const getNews = async () => {
  await clusterScrape({ filepath: import.meta.url, articles: allGaming });
};

(async () => {
  await scrapeCategory(allGaming, import.meta.url);
})();

export default allGaming;
