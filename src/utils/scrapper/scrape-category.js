import clusterScrape from "./cluster-scrape.js";
import { getArticles } from "./get-articles.js";
import { checkIsEntryFile, getArgs, printHighlightedText } from "../utils.js";

export const scrapeCategory = async (articles, filePath) => {
  if (!checkIsEntryFile(filePath)) return false;

  const { maxConcurrency, concurrencyLevel, mode } = getArgs();
  if (mode === "legacy") {
    printHighlightedText("RUNNING IN LEGACY MODE");
    for (let article of articles) {
      await getArticles(article);
    }
  } else if (mode === "cluster") {
    printHighlightedText("RUNNING IN CLUSTER MODE");
    await clusterScrape({
      filepath: filePath,
      articles: articles,
      checkEntryFile: true,
      maxConcurrency: maxConcurrency,
      concurrencyLevel: concurrencyLevel,
    });
  }
};
