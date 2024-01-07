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

const allLaw = [
  aboveTheLaw,
  associatedPress,
  courthouseNewsService,
  crimeOnline,
  findLaw,
  justia,
  law,
  legalInsurrection,
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
