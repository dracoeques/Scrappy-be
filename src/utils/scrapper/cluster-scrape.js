import { checkIsEntryFile } from "../utils.js";
import { getArticlesCluster } from "./get-articles-cluster.js";

const clusterScrape = async function ({
  filepath,
  articles,
  checkEntryFile = false,
  maxConcurrency = 4,
  concurrencyLevel = "context",
}) {
  try {
    const { Cluster } = await import("puppeteer-cluster");
    let puppeteer = (await import("puppeteer-extra")).default;
    const StealthPlugin = (await import("puppeteer-extra-plugin-stealth"))
      .default;
    if (puppeteer) puppeteer.use(StealthPlugin());

    const isEntryFile = checkIsEntryFile(filepath);
    const concurrencyMap = {
      context: Cluster.CONCURRENCY_CONTEXT,
      browser: Cluster.CONCURRENCY_BROWSER,
      page: Cluster.CONCURRENCY_PAGE,
    };

    if (!maxConcurrency || maxConcurrency < 0) maxConcurrency = 4;
    if (
      !concurrencyLevel ||
      !Object.keys(concurrencyMap).includes(concurrencyLevel)
    )
      concurrencyLevel = "context";
    if ((checkEntryFile && !isEntryFile) || articles.length === 0) return;
    const cluster = await Cluster.launch({
      concurrency: concurrencyMap[concurrencyLevel],
      maxConcurrency:
        articles.length < maxConcurrency ? articles.length : maxConcurrency,
      retryLimit: 10,
      puppeteer: puppeteer,
      timeout: 750000,
      monitor: true,
    });
    console.log(`Max concurrency: ${maxConcurrency}`);
    console.log(`Concurrency level: ${concurrencyMap[concurrencyLevel]}`);

    cluster.on("taskerror", (err, data) => {
      console.log(`Error crawling ${data}: ${err.message}`);
    });
    await cluster.task(async ({ page, data }) => {
      await getArticlesCluster(data, page);
    });
    for (let article of articles) {
      cluster.queue(article);
    }
    await cluster.idle();
    await cluster.close();
  } catch (err) {
    console.error("Error scrapping pages");
    console.error(err);
  }
};

export default clusterScrape;
