import clusterScrape from "../../../utils/scrapper/cluster-scrape.js";
import { scrapeCategory } from "../../../utils/scrapper/scrape-category.js";
import abc from "./abc.js";
import bizJournals from "./bizJournals.js";
import bloomberg from "./bloomberg.js";
import businessInsider from "./businessInsider.js";
import businessStandard from "./businessStandard.js";
import chinaBriefing from "./chinaBriefing.js";
import cnbc from "./cnbc.js";
import dw from "./dw.js";
import euroNews from "./euroNews.js";
import europeanBusinessMagazine from "./europeanBusinessMagazine.js";
import financialTimes from "./financialTimes.js";
import forbes from "./forbes.js";
import foxBusiness from "./foxBusiness.js";
import inc from "./inc.js";
import internationalBusinessTimes from "./internationalBusinessTimes.js";
import marketWatch from "./marketWatch.js";
import theEconomist from "./theEconomist.js";
import wallStreetJournal from "./wallStreetJournal.js";
import yahooFinance from "./yahooFinance.js";
import cnnBusiness from "./cnnBusiness.js";
import fortune from "./fortune.js";
import investopedia from "./investopedia.js";
import seekingAlpha from "./seekingAlpha.js";
import morningStar from "./morningStar.js";
import theStreet from "./theStreet.js";
import nikkeiAsianReview from "./nikkeiAsianReview.js";
import reuters from "./reuters.js";
import australianFinancialReview from "./australianFinancialReview.js";
import cheddar from "./cheddar.js";
import zacksInvestmentResearch from "./zacksInvestmentResearch.js";
import theMotleyFool from "./theMotleyFool.js";
import caixinGlobal from "./caixinGlobal.js";

const allBizAndFinance = [
  abc,
  bizJournals,
  bloomberg,
  businessInsider,
  businessStandard,
  caixinGlobal,
  chinaBriefing,
  cnbc,
  cnnBusiness,
  dw,
  euroNews,
  europeanBusinessMagazine,
  financialTimes,
  forbes,
  fortune,
  foxBusiness,
  inc,
  internationalBusinessTimes,
  investopedia,
  marketWatch,
  seekingAlpha,
  theEconomist,
  wallStreetJournal,
  yahooFinance,
  morningStar,
  reuters,
  theStreet,
  nikkeiAsianReview,
  australianFinancialReview,
  cheddar,
  zacksInvestmentResearch,
  theMotleyFool,
  caixinGlobal,
];

export const getNews = async () => {
  await clusterScrape({
    filepath: import.meta.url,
    articles: allBizAndFinance,
  });
};

(async () => {
  await scrapeCategory(allBizAndFinance, import.meta.url);
})();

export default allBizAndFinance;
