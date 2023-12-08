import clusterScrape from "../../../utils/scrapper/scrape-category.js";
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
  await clusterScrape({
    filepath: import.meta.url,
    articles: allGaming,
    checkEntryFile: true,
  });
})();

export default allGaming;
