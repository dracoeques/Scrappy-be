import clusterScrape from "../../../utils/scrapper/cluster-scrape.js";
import { scrapeCategory } from "../../../utils/scrapper/scrape-category.js";
import arsTechnica from "./arsTechnica.js";
import cnet from "./cnet.js";
import engadget from "./engadget.js";
import gigaom from "./gigaom.js";
import gizmodo from "./gizmodo.js";
import liveScience from "./liveScience.js";
import scientificAmerican from "./scientificAmerican.js";
import techCrunch from "./techCrunch.js";
import theVerge from "./theVerge.js";
import wired from "./wired.js";
import popularScience from "./popularScience.js";
import readWrite from "./readWrite.js";
import scienceDaily from "./scienceDaily.js";
import mitTechnologyReview from "./mitTechnologyReview.js";
import nature from "./nature.js";
import science from "./science.js";
import mashable from "./mashable.js";
import ieeeSpectrum from "./ieeeSpectrum.js";
import gizChina from "./gizChina.js";
import ventureBeat from "./ventureBeat.js";
import voxTech from "./voxTech.js";
import techRadar from "./techRadar.js";
import yahoo from "./yahoo.js";
import androidAuthority from "./androidAuthority.js";
import bbc from "./bbc.js";
import bbcFuture from "./bbcFuture.js";
import businessInsider from "./businessInsider.js";
import cas from "./cas.js";
import cnbc from "./cnbc.js";
import digitalTrends from "./digitalTrends.js";
import eurekalert from "./eurekalert.js";
import extremeTech from "./extremeTech.js";
import futurism from "./futurism.js";
import futurity from "./futurity.js";
import geekWire from "./geekWire.js";
import howStuffWorks from "./howStuffWorks.js";
import inverse from "./inverse.js";
import itif from "./itif.js";
import mitNews from "./mitNews.js";
import newsCenter from "./newsCenter.js";
import npr from "./npr.js";
import pcMag from "./pcMag.js";
import phys from "./phys.js";
import pubmed from "./pubmed.js";
import quantaMagazine from "./quantaMagazine.js";
import scienceAlert from "./scienceAlert.js";
import smithsonianMagazine from "./smithsonianMagazine.js";
import space from "./space.js";
import techRepublic from "./techRepublic.js";
import techSpot from "./techSpot.js";
import techTimes from "./techTimes.js";
import theGuardian from "./theGuardian.js";
import theNextWeb from "./theNextWeb.js";
import tomsHardware from "./tomsHardware.js";
import uberGizmo from "./uberGizmo.js";
import wallStreetJournal from "./wallStreetJournal.js";
import wccfTech from "./wccfTech.js";
import zdnet from "./zdnet.js";
import scienceFriday from "./scienceFirday.js";
import scienceNews from "./scienceNews.js";
import sciTechDaily from "./sciTechDaily.js";
import techExplore from "./techExplore.js";

const allScienceAndTech = [
  androidAuthority,
  arsTechnica,
  bbc,
  bbcFuture,
  businessInsider,
  cas,
  cnbc,
  cnet,
  digitalTrends,
  engadget,
  eurekalert,
  extremeTech,
  futurism,
  futurity,
  geekWire,
  gigaom,
  gizChina,
  gizmodo,
  howStuffWorks,
  ieeeSpectrum,
  inverse,
  itif,
  liveScience,
  mashable,
  mitNews,
  mitTechnologyReview,
  nature,
  newsCenter,
  npr,
  pcMag,
  phys,
  popularScience,
  pubmed,
  quantaMagazine,
  readWrite,
  science,
  scienceAlert,
  scienceDaily,
  scienceFriday,
  scienceNews,
  scientificAmerican,
  sciTechDaily,
  smithsonianMagazine,
  space,
  techCrunch,
  techExplore,
  techRadar,
  techRepublic,
  techSpot,
  techTimes,
  theGuardian,
  theNextWeb,
  theVerge,
  tomsHardware,
  uberGizmo,
  ventureBeat,
  voxTech,
  wallStreetJournal,
  wccfTech,
  wired,
  yahoo,
  zdnet,
];

export const getNews = async () => {
  await clusterScrape({
    filepath: import.meta.url,
    articles: allScienceAndTech,
  });
};

(async () => {
  await scrapeCategory(allScienceAndTech, import.meta.url);
})();

export default allScienceAndTech;
