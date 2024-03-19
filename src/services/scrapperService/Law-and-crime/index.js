import clusterScrape from "../../../utils/scrapper/cluster-scrape.js";
import { scrapeCategory } from "../../../utils/scrapper/scrape-category.js";
import aboveTheLaw from "./aboveTheLaw.js";
import courthouseNewsService from "./courthouseNewsService.js";
import crimeOnline from "./crimeOnline.js";
import findLaw from "./findLaw.js";
import justia from "./justia.js";
import law from "./law.js";
import legalInsurrection from "./legalInsurrection.js";
import theCrimeReport from "./theCrimeReport.js";
import theMarshallProject from "./theMarshallProject.js";
import associatedPress from "./associatedPress.js";
import theIndependent from "./theIndependent.js";
import lawTopics from "./lawTopics.js";
import buzzfeed from "./buzzfeed.js";
import icij from "./icij.js";
import revealNews from "./revealNews.js";
import scotUsBlog from "./scotUsBlog.js";
import texasTribune from "./texasTribune.js";
import theAppeal from "./theAppeal.js";
import theBureauInvestigates from "./theBureauInvestigates.js";

const allLaw = [
  aboveTheLaw,
  associatedPress,
  buzzfeed,
  courthouseNewsService,
  crimeOnline,
  findLaw,
  icij,
  justia,
  law,
  lawTopics,
  legalInsurrection,
  revealNews,
  scotUsBlog,
  texasTribune,
  theAppeal,
  theBureauInvestigates,
  theCrimeReport,
  theIndependent,
  theMarshallProject,
];

export const getNews = async () => {
  await clusterScrape({ filepath: import.meta.url, articles: allLaw });
};

(async () => {
  await scrapeCategory(allLaw, import.meta.url);
})();

export default allLaw;
