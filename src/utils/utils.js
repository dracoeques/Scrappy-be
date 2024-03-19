import { promisify } from "util";
import { fileURLToPath } from "url";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
/// puppeteer helpers

// function to scroll to the bottom of the page.
export const scrollToBottom = async (
  page,
  scroll_delay = 500,
  max_scroll_time = 15
) => {
  let curr_scroll = parseInt(await page.evaluate("window.scrollY"));
  let new_scroll = parseInt(await page.evaluate("window.scrollY"));
  let curr_scroll_time = 0;

  do {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    curr_scroll = parseInt(await page.evaluate("window.scrollY"));
    await page.evaluate(`
      window.scrollTo({
        top: ${curr_scroll + 1000},
        behaviour: 'smooth'
      })
      `);
    new_scroll = parseInt(await page.evaluate("window.scrollY"));
    curr_scroll_time++;
    await sleep(scroll_delay);
  } while (curr_scroll !== new_scroll && curr_scroll_time < max_scroll_time);
};

export const currentDate = (date = new Date()) => {
  // Get the current date components
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");

  // Format the current date
  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
};

/// mongoose helpers

// function for saving documents to mongo
export const saveDocuments = async (Model, data) => {
  const response = await Model.insertMany(data);
  return response;
};

// function for reading saved documents from mongo

export const readSavedDocumnets = async (Model, siteName) => {
  const res = await Model.find({ siteName });
  if (res.length == 0) {
    console.log(
      `No documents found in the collection ${Model.collection.collectionName} with site name ${siteName}.`
    );
  } else {
    console.log(
      `Found ${res.length} documents in collection ${Model.collection.collectionName} with site name ${siteName}.`
    );
  }

  return res;
};

// Miscelaneous helpers

// Promisifying setTimeout for using in async / await.
export const sleep = promisify(setTimeout);

// function to check if file is called or imported
export const checkIsEntryFile = (filename) => {
  const cleanFileName = fileURLToPath(filename);
  const entryFile = process.argv[1];
  return entryFile === cleanFileName;
};

const isDate = (input) => {
  if (Object.prototype.toString.call(input) === "[object Date]") return true;
  return false;
};

export const isWithinRange = (currDate, daysToSubtract) => {
  const date = new Date(currDate);
  if (isNaN(date) || !isDate(date)) return true;
  const passedDate = date.getTime();
  if (!daysToSubtract || typeof daysToSubtract !== "number") daysToSubtract = 7;
  const endDate = new Date().getTime() - daysToSubtract * 24 * 60 * 60 * 1000;
  if (passedDate < endDate) return false;
  return true;
};

export const getArgs = () => {
  return yargs(hideBin(process.argv))
    .options({
      c: {
        alias: ["max-concurrency", "mc"],
        demandOption: false,
        default: 4,
        describe: "Maximum number of concurrent scrappers",
        type: "number",
      },
      d: {
        alias: ["date-from", "df"],
        demandOption: false,
        default: 7,
        describe:
          "Earliest date to include files (in days). You can pass numbers less than there (e.g. -1) to disable date checking.",
        type: "number",
      },
      l: {
        alias: ["concurrency-level", "cl"],
        demandOption: false,
        default: "page",
        describe: "Level of concurrency for running scrapper",
        choices: ["page", "context", "browser"],
        type: "string",
      },
      m: {
        alias: "mode",
        demandOption: false,
        default: "cluster",
        describe: "Mode in which scrapper is run",
        choices: ["cluster", "legacy"],
        type: "string",
      },
      r: {
        alias: ["retry-error", "re"],
        demadOption: false,
        default: false,
        describe: "Retry Sites that have previously not been fully scraped",
        type: "boolean",
      },
      f: {
        alias: ["from-category", "fc"],
        demandOption: false,
        default: 1,
        describe: `From which category to start scraping. \nArticle list order ${articleList}`,
        type: "number",
      },
      t: {
        alias: ["to-category", "tc"],
        demandOption: false,
        default: articleList.length,
        describe: `Catagory on which scraping stops. \nArticle list order ${articleList}`,
        type: "number",
      },
    })
    .wrap(null)
    .help("help").argv;
};

export const getCategoryLimits = () => {
  const { fromCategory, toCategory } = getArgs();
  const spliceStart = fromCategory < 1 ? 1 : fromCategory - 1;
  const spliceEnd =
    toCategory > articleList.length
      ? articleList.length
      : toCategory - fromCategory + 1;

  return { start: spliceStart, end: spliceEnd };
};

export const printHighlightedText = (text) => {
  console.log("\x1b[1m\x1b[43m\x1b[34m%s\x1b[0m", text);
};

export const articleList = [
  "Art and Fashion",
  "Business and Finance",
  "Entertainment",
  "Gaming",
  "Law",
  "Lifestyle and Health",
  "Politics",
  "Science and Tech",
  "Sport",
  "Web3",
];
