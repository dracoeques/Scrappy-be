import clusterScrape from "./cluster-scrape.js";
import { checkIsEntryFile, getArgs, printHighlightedText } from "../utils.js";
import { singleScrape } from "./single-scrape.js";

export const scrapeCategory = async (articles, filePath) => {
  if (!checkIsEntryFile(filePath)) return false;

  const { mode } = getArgs();
  if (mode === "legacy") {
    printHighlightedText("RUNNING IN LEGACY MODE");
    for (let article of articles) {
      await singleScrape({
        article: article,
        filepath: filePath,
        checkEntryFile: true,
      });
    }
  } else if (mode === "cluster") {
    printHighlightedText("RUNNING IN CLUSTER MODE");
    await clusterScrape({
      filepath: filePath,
      articles: articles,
      checkEntryFile: true,
    });
  }
};
