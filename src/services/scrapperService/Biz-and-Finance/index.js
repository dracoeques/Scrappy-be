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
import americanBanker from "./americanBanker.js";
import bbc from "./bbc.js";
import businessBecause from "./businessBecause.js";
import businessInsiderAfrica from "./businessInsiderAfrica.js";
import businessWire from "./businessWire.js";
import financialBuzz from "./financialBuzz.js";
import financialPost from "./financialPost.js";
import investing from "./investing.js";
import investoPaper from "./investoPaper.js";
import investors from "./investors.js";
import kiplinger from "./kiplinger.js";
import marketRealist from "./marketRealist.js";
import morningBrew from "./morningBrew.js";
import nasdaq from "./nasdaq.js";
import nbcNews from "./nbcNews.js";
import nyTimes from "./nyTimes.js";
import pymnts from "./pymnts.js";
import theTelegraph from "./telegraph.js";
import theFintechTimes from "./theFintechTimes.js";
import theFiscalTimes from "./theFiscalTimes.js";
import thisIsMoney from "./thisIsMoney.js";
import wallStreetJournalFinance from "./wallStreetJournalFinance.js";
import zeroHedge from "./zeroHedge.js";
import streetWiseReport from "./streetWiseReport.js";
import theBalanceMoney from "./theBalanceMoney.js";

const allBizAndFinance = [
  abc,
  americanBanker,
  australianFinancialReview,
  bbc,
  bizJournals,
  bloomberg,
  businessBecause,
  businessInsider,
  businessInsiderAfrica,
  businessStandard,
  businessWire,
  caixinGlobal,
  cheddar,
  chinaBriefing,
  cnbc,
  cnnBusiness,
  dw,
  euroNews,
  europeanBusinessMagazine,
  financialBuzz,
  financialPost,
  financialTimes,
  forbes,
  fortune,
  foxBusiness,
  inc,
  internationalBusinessTimes,
  investing,
  investoPaper,
  investopedia,
  investors,
  kiplinger,
  marketRealist,
  marketWatch,
  morningBrew,
  morningStar,
  nasdaq,
  nbcNews,
  nikkeiAsianReview,
  nyTimes,
  pymnts,
  reuters,
  seekingAlpha,
  streetWiseReport,
  theTelegraph,
  theBalanceMoney,
  theEconomist,
  theFintechTimes,
  theFiscalTimes,
  theMotleyFool,
  theStreet,
  thisIsMoney,
  wallStreetJournal,
  wallStreetJournalFinance,
  yahooFinance,
  zacksInvestmentResearch,
  zeroHedge,
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
