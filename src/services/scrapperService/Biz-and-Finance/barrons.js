// import { singleScrape } from "../../../utils/scrapper/single-scrape.js";
// import { checkIsEntryFile } from "../../../utils/utils.js";

// import BizAndFinance from "../../../models/bizAndFinance.js";

// const seekingAlpha = {
//   name: "seekingAlpha",
//   Model: BizAndFinance,
//   url: "https://seekingalpha.com/",
//   linkSelector: [".BarronsTheme--headline-link--2s0JerNw "],
//   articleSelectors: {
//     titleSelector: [".article__headline", "h1"],
//     dateSelector: ["[data-test-id='post-date']", , "time"],
//     contentSelector: [".nk-f"],
//     articleContentSelector: [
//       "[data-test-id='article-content'] p",
//       "[data-test-id='article-content'] h1",
//       "[data-test-id='article-content'] h2",
//       "[data-test-id='article-content'] h3",
//       "[data-test-id='article-content'] h4",
//       "[data-test-id='article-content'] h5",
//       "[data-test-id='article-content'] h6",
//       "[data-test-id='article-content'] ul",
//     ],
//   },
// };
// export const getNews = async () => {
//   const res = await singleScrape({
//   article: artNews,
//   filepath: import.meta.url,
//   checkEntryFile: true,
// });;
//   return res;
// };

// (async () => {
//   const isEntryFile = checkIsEntryFile(import.meta.url);
//   if (isEntryFile) await singleScrape({
//   article: artNews,
//   filepath: import.meta.url,
//   checkEntryFile: true,
// });;
// })();

// export default seekingAlpha;
