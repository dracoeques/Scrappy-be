import clusterScrape from "../../../utils/scrapper/scrape-category.js";
import { checkIsEntryFile, getArgs } from "../../../utils/utils.js";
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
  if (!checkIsEntryFile(import.meta.url)) return;
  const { maxConcurency, concurencyLevel } = getArgs();

  await clusterScrape({
    filepath: import.meta.url,
    articles: allLaw,
    checkEntryFile: true,
    maxConcurrency: maxConcurency,
    concurrencyLevel: concurencyLevel,
  });
})();

export default allLaw;
