import { checkIsEntryFile } from "../utils.js";
import { getArticles } from "./get-articles-cluster.js";

const clusterScrape = async function (
  filepath,
  articleList,
  checkEntryFile = false
) {
  const { Cluster } = await import("puppeteer-cluster");
  const puppeteer = (await import("puppeteer-extra")).default;
  const StealthPlugin = (await import("puppeteer-extra-plugin-stealth"))
    .default;
  puppeteer.use(StealthPlugin());
  const isEntryFile = checkIsEntryFile(filepath);
  if ((checkEntryFile && !isEntryFile) || articleList.length === 0) return;

  const cluster = await Cluster.launch({
    concurrency: Cluster.CONCURRENCY_CONTEXT,
    maxConcurrency: articleList.length < 10 ? articleList.length : 10,
    puppeteer: puppeteer,
    timeout: 750000,
  });

  cluster.on("taskerror", (err, data) => {
    console.log(`Error crawling ${data}: ${err.message}`);
  });
  await cluster.task(async ({ page, data }) => {
    await getArticles(data, page);
  });
  for (let article of articleList) {
    cluster.queue(article);
  }
  await cluster.idle();
  await cluster.close();
};

export default clusterScrape;
